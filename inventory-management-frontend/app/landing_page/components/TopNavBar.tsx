import Link from "next/link";
import React from "react";

export default function TopNavBar() {
  return (
    <div className="flex flex-1 justify-center border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
        <header className="flex items-center justify-between whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-3 text-[#0e1b1b] dark:text-white">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">inventory_2</span>
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight">Inventory Pro</h2>
          </div>
          <div className="flex flex-1 justify-end gap-10">
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                Platform
              </a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                Solutions
              </a>
              <a  className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                API Docs
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 text-sm font-bold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                Sign In
              </button>
              <Link href="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
