import React from "react";

export default function Roles() {
  return (
    <div className="flex flex-1 justify-center py-10 bg-background-light dark:bg-background-dark">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
          <div>
            <h2 className="text-[#0e1b1b] dark:text-white text-3xl font-bold tracking-tight">Built for every role</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
              Fine-tuned access control for your entire ecosystem.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
              <p className="text-sm font-bold">Admin Access</p>
            </div>
            <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <span className="material-symbols-outlined text-[18px] text-primary">skillet</span>
              <p className="text-[#0e1b1b] dark:text-gray-300 text-sm font-medium">Chef View</p>
            </div>
            <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <span className="material-symbols-outlined text-[18px] text-primary">local_shipping</span>
              <p className="text-[#0e1b1b] dark:text-gray-300 text-sm font-medium">Supplier Portal</p>
            </div>
            <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <span className="material-symbols-outlined text-[18px] text-primary">person</span>
              <p className="text-[#0e1b1b] dark:text-gray-300 text-sm font-medium">Accountant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
