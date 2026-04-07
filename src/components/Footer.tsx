"use client";

export function Footer() {
  return (
    <footer className="w-full max-w-4xl py-24 pb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs text-gray-500">
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Product</h4>
          <p className="hover:text-white cursor-pointer transition-colors">Download</p>
          <p className="hover:text-white cursor-pointer transition-colors">Enterprise</p>
          <p className="hover:text-white cursor-pointer transition-colors">Changelog</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Resources</h4>
          <p className="hover:text-white cursor-pointer transition-colors">Documentation</p>
          <p className="hover:text-white cursor-pointer transition-colors">GitHub</p>
          <p className="hover:text-white cursor-pointer transition-colors">Discord</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Company</h4>
          <p className="hover:text-white cursor-pointer transition-colors">About</p>
          <p className="hover:text-white cursor-pointer transition-colors">Blog</p>
          <p className="hover:text-white cursor-pointer transition-colors">Careers</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Legal</h4>
          <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
