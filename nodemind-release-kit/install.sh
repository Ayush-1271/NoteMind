#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/gummybearansh/NodeMind.git"
INSTALL_ROOT="${NODEMIND_HOME:-$HOME/.nodemind}"
SRC_DIR="$INSTALL_ROOT/src/NodeMind"
VENV_DIR="$INSTALL_ROOT/venv"
BIN_DIR="$HOME/.local/bin"
WRAPPER="$BIN_DIR/nodemind"
FRONTEND_DIR="$SRC_DIR/frontend"

log() { printf '\033[1;34m[NodeMind]\033[0m %s\n' "$1"; }
warn() { printf '\033[1;33m[NodeMind]\033[0m %s\n' "$1"; }
err() { printf '\033[1;31m[NodeMind]\033[0m %s\n' "$1" >&2; }
need() {
  if ! command -v "$1" >/dev/null 2>&1; then
    err "Missing required dependency: $1"
    exit 1
  fi
}

OS="$(uname -s)"
case "$OS" in
  Linux|Darwin) ;;
  *) err "Unsupported OS: $OS"; exit 1 ;;
esac

need git
need python3
need node

if command -v npm >/dev/null 2>&1; then
  PKG_CLIENT="npm"
elif command -v bun >/dev/null 2>&1; then
  PKG_CLIENT="bun"
else
  err "Missing npm or bun. Install Node.js with npm, or bun."
  exit 1
fi

PY_OK=$(python3 - <<'PY'
import sys
print(int(sys.version_info >= (3, 11)))
PY
)
if [ "$PY_OK" != "1" ]; then
  err "Python 3.11+ is required"
  exit 1
fi

mkdir -p "$INSTALL_ROOT" "$BIN_DIR"

if [ ! -d "$SRC_DIR/.git" ]; then
  log "Cloning NodeMind into $SRC_DIR"
  mkdir -p "$(dirname "$SRC_DIR")"
  git clone "$REPO_URL" "$SRC_DIR"
else
  log "Updating existing NodeMind checkout"
  git -C "$SRC_DIR" pull --ff-only
fi

if [ ! -d "$VENV_DIR" ]; then
  log "Creating Python virtual environment"
  python3 -m venv "$VENV_DIR"
fi

log "Installing Python package and CLI"
"$VENV_DIR/bin/pip" install --upgrade pip setuptools wheel
"$VENV_DIR/bin/pip" install -e "$SRC_DIR"

if [ -d "$FRONTEND_DIR" ]; then
  log "Installing frontend dependencies with $PKG_CLIENT"
  if [ "$PKG_CLIENT" = "npm" ]; then
    (cd "$FRONTEND_DIR" && npm install)
  else
    (cd "$FRONTEND_DIR" && bun install)
  fi
else
  warn "frontend/ directory not found, skipping frontend install"
fi

cat > "$WRAPPER" <<EOF
#!/usr/bin/env bash
set -e
export NODEMIND_HOME="${INSTALL_ROOT}"
exec "${VENV_DIR}/bin/nodemind" "\$@"
EOF
chmod +x "$WRAPPER"

if ! printf '%s' ":$PATH:" | grep -q ":$BIN_DIR:"; then
  warn "$BIN_DIR is not on your PATH. Add this line to your shell profile:"
  printf '  export PATH="%s:$PATH"\n' "$BIN_DIR"
fi

cat <<EOF

NodeMind installed successfully.

CLI:
  nodemind --help

Project source:
  $SRC_DIR

Python env:
  $VENV_DIR

Next steps:
  1. Create $SRC_DIR/.env
  2. Add GEMINI_API_KEY, MONGO_DB_URL, CHROMA_PERSIST_DIR
  3. Start MongoDB
  4. Run: nodemind start
  5. In another terminal: cd $FRONTEND_DIR && npm run dev
EOF
