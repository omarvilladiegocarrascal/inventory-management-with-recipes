import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-1 justify-center py-12 md:py-24">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-6">
        <div className="@container">
          <div className="flex flex-col gap-12 @[864px]:flex-row items-center">
            <div className="flex flex-col gap-8 @[864px]:w-1/2">
              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  Now with predictive scaling
                </div>
                <h1 className="text-[#0e1b1b] dark:text-white text-5xl font-extrabold leading-[1.1] tracking-tight @[480px]:text-7xl">
                  Precision Inventory. <span className="text-primary">Perfected Recipes.</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-[500px]">
                  The modular platform for modern kitchens and warehouses. Track stock, automate ordering, and cost recipes with surgical precision.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-all">
                  Start Managing
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#0e1b1b] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  View Demo
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG8foL_ClXKcfLu9ajXoj4V3vIq8a5OrLFDl-UpoeEas-MMd0wrINB0QD_aXpzU7x3WQ-78KhFRTztqfLPQFf-2xn8f_M1yFVbaTA4STuvaw6lW7MX_qd6NR-aI1M8ovMFjfFUNbpou7HygXrTdiTDsnn-RAHNQLDA-5955Qz8f15Te-cXXr7s-vNRrSyZj2t0Ewy0ehaQk45wUomTZb_Q_GBxpsSm9TwZozfny3ogAhJ2RNhMFiL5UqtVRl-0w2ieSs7G5r9k0cM")',
                      }}
                    ></div>
                  </div>
                  <div className="size-10 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA90Kh0d9sBUrR8e8GevNQOMB7gWCl-vUCo9NaIFI2GT73WrycuNs4WwzDgt93u6TjWa9VC-bapa2wnKuiRXAQ5HRWNX_iBmdFrdrHUcINDP6w9-VE63y6Zj5KkVZ_ejlrBzN7HqEve-EM8_CWl11rI_Pb-Bz1K1b0_B7vbRXkJaY3z4umCzDn1uKL9CUykSf0bMx37bow4x6gauYXH060xK31PSK3jm6vx4cllITtHADyJDKhvW26feAIsP5HDTpcJh12c36hRwZo")',
                      }}
                    ></div>
                  </div>
                  <div className="size-10 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZKA2EWk8dkBFzLIcQwXEbl6BICw5xfJT7AfPH7J8QUBbIi-Kl4u9p9z1ie42bOiQYpIqonQ-MU04nVYI3C9xKNwW2oRustdHhaPsRlM7Ku6xpiJvwbA-S29lcxCnPiVSxFK1LS0AOgvCDTRUkHnVKlNLOGZidB2z43wBCy39WirwboJJGBIOur6bwRExPkTppTMlEHUewCtq6nfILRs8QKMgOYU-yHXEZ_wJmbNs1bxUgF-CugLCtEx1rsnaxhh9AbZpsZwyZP9o")',
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">Trusted by 2,000+ operations worldwide</p>
              </div>
            </div>
            <div className="w-full @[864px]:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden aspect-[4/3] flex items-center justify-center p-8">
                  <div className="w-full h-full bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col p-4 gap-4 border border-gray-100 dark:border-gray-700">
                    <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-24 bg-primary/10 rounded-md border border-primary/20"></div>
                      <div className="h-24 bg-emerald-500/10 rounded-md border border-emerald-500/20"></div>
                      <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-4 w-5/6 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-4 w-4/6 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
