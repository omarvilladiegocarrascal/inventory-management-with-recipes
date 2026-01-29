import React from "react";

export default function FinalCta() {
  return (
    <div className="flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight max-w-[800px] relative z-10">
            Ready to eliminate operational waste?
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-[600px] relative z-10">
            Join over 2,000 businesses streamlining their supply chain with Inventory Pro. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <button className="min-w-[200px] bg-white text-primary h-14 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
              Create Free Account
            </button>
            <button className="min-w-[200px] bg-white/10 border border-white/30 text-white h-14 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
