import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-1 justify-center py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined font-bold">inventory_2</span>
              <span className="text-xl font-extrabold text-[#0e1b1b] dark:text-white">Inventory Pro</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Precision tools for professional kitchens and modern industrial warehouses.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0e1b1b] dark:text-white">Platform</h4>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Features</a>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Integrations</a>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Pricing</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0e1b1b] dark:text-white">Resources</h4>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Documentation</a>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">API Reference</a>
            <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Community</a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2024 Inventory Pro. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer transition-colors">mail</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer transition-colors">share</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
