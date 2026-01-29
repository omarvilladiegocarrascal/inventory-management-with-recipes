 "use client";
 import React from "react";
 import { useLanguage } from "../hooks/useLanguage";
 
 const LanguageSwitcher: React.FC = () => {
   const { lang, toggleLanguage, t } = useLanguage();
   return (
     <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
       <span className="px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm">
         {t("hello_world")}
       </span>
       <button
         type="button"
         onClick={toggleLanguage}
         className="px-3 py-2 rounded-full bg-primary text-slate-900 font-semibold shadow-sm hover:bg-opacity-90 transition"
         aria-label="Toggle language"
         title={`Current: ${lang}`}
       >
         {t("toggle_language")}
       </button>
     </div>
   );
 };
 
 export default LanguageSwitcher;
