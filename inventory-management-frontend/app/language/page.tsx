 "use client";
 import React from "react";
 import { useLanguage } from "../hooks/useLanguage";
 import { useRouter } from "next/navigation";
 
 const LanguagePage: React.FC = () => {
   const { lang, setLanguage, t } = useLanguage();
   const router = useRouter();
 
   const handleSelect = (selected: "en" | "es") => {
     setLanguage(selected);
     router.push("/");
   };
 
   return (
     <div className="min-h-screen w-full flex items-center justify-center p-6">
       <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 flex flex-col gap-6">
         <div className="flex flex-col gap-2">
           <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
             {t("choose_language_title")}
           </h1>
           <p className="text-slate-600 dark:text-slate-400">
             {t("choose_language_desc")}
           </p>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <button
             type="button"
             onClick={() => handleSelect("en")}
             className={`w-full px-6 py-4 rounded-xl border transition-all
             ${lang === "en" ? "border-primary bg-primary/10" : "border-slate-200 dark:border-slate-700"}
             text-slate-900 dark:text-white hover:border-primary`}
             aria-label="Select English"
           >
             {t("select_english")}
           </button>
 
           <button
             type="button"
             onClick={() => handleSelect("es")}
             className={`w-full px-6 py-4 rounded-xl border transition-all
             ${lang === "es" ? "border-primary bg-primary/10" : "border-slate-200 dark:border-slate-700"}
             text-slate-900 dark:text-white hover:border-primary`}
             aria-label="Seleccionar español"
           >
             {t("select_spanish")}
           </button>
         </div>
 
         <div className="text-sm text-slate-500 dark:text-slate-400">
           {t("current_language")}: <span className="font-semibold">{lang.toUpperCase()}</span>
         </div>
       </div>
     </div>
   );
 };
 
 export default LanguagePage;
