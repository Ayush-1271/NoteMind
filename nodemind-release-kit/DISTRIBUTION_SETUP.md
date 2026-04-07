# NodeMind distribution setup

This kit gives you the assets needed to power these landing-page install commands:

```bash
curl -fsSL https://nodemind.dev/install | bash
npm install -g nodemind
bun add -g nodemind
brew install nodemind
paru -S nodemind
```

## Files included

- `install.sh` — official curl installer for macOS/Linux
- `npm/` — npm and bun package wrapper
- `homebrew/nodemind.rb` — Homebrew formula template
- `arch/PKGBUILD` — Arch/paru package template
- `.github/workflows/release.yml` — starter release workflow

## Recommended release flow

1. Tag a release like `v0.1.0`
2. Upload a tarball artifact to GitHub Releases
3. Replace SHA placeholders in the Homebrew formula and PKGBUILD
4. Publish the npm package
5. Host `install.sh` at `https://nodemind.dev/install`

## Landing page install tabs

Use these exact commands in the hero:

```bash
curl -fsSL https://nodemind.dev/install | bash
npm install -g nodemind
bun add -g nodemind
brew install nodemind
paru -S nodemind
```

## Important

The repository currently has `setup.py` with a Python console script entry point:

```python
entry_points={
  "console_scripts": [
    "nodemind=backend.cli:main",
  ]
}
```

That means the backend CLI path already exists conceptually, but you still need to verify that `backend/cli.py` is implemented and that a release tarball is published before Homebrew, paru, and curl installs are fully live.
