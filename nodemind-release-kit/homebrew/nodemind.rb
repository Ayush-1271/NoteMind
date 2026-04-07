class Nodemind < Formula
  include Language::Python::Virtualenv

  desc "Graph memory for multi-agent AI systems"
  homepage "https://github.com/gummybearansh/NodeMind"
  url "https://github.com/gummybearansh/NodeMind/archive/refs/tags/v0.1.0.tar.gz"
  sha256 "REPLACE_WITH_RELEASE_TARBALL_SHA256"
  license "MIT"

  depends_on "python@3.11"
  depends_on "node"

  def install
    virtualenv_install_with_resources
    libexec.install Dir["frontend"] if Dir.exist?("frontend")
    (bin/"nodemind-web").write <<~EOS
      #!/bin/bash
      cd #{libexec}/frontend || exit 1
      exec npm run dev
    EOS
  end

  test do
    assert_match "nodemind", shell_output("#{bin}/nodemind --help", 0)
  end
end
