import React from "react";

export default function Features() {
  return (
    <div className="flex flex-1 justify-center py-20 bg-white dark:bg-background-dark/50">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-6 gap-12">
        <div className="flex flex-col gap-4 max-w-[800px]">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">The Platform</h2>
          <h3 className="text-[#0e1b1b] dark:text-white text-4xl font-extrabold leading-tight @[480px]:text-5xl tracking-tight">
            Engineered for total operational accuracy.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group flex flex-col gap-6 p-8 bg-background-light dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">inventory</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#0e1b1b] dark:text-white text-xl font-bold">Stock Tracking</p>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Real-time inventory mapping with predictive low-stock alerts and expiration monitoring.
              </p>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-sm font-bold cursor-pointer">
              Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
          <div className="group flex flex-col gap-6 p-8 bg-background-light dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#0e1b1b] dark:text-white text-xl font-bold">Recipe Costing</p>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Dynamic margin calculations based on supplier price fluctuations and daily wastage logs.
              </p>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-sm font-bold cursor-pointer">
              Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
          <div className="group flex flex-col gap-6 p-8 bg-background-light dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#0e1b1b] dark:text-white text-xl font-bold">Supplier Portal</p>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                A centralized gateway for automated purchase orders, direct communication, and performance KPIs.
              </p>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-sm font-bold cursor-pointer">
              Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
