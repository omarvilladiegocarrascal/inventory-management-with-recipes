 "use client";
 import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
 import en from "../i18n/en.json";
 import es from "../i18n/es.json";
 
 type Lang = "en" | "es";
 type Dict = typeof en;
 
 interface LanguageContextValue {
   lang: Lang;
   toggleLanguage: () => void;
   setLanguage: (lang: Lang) => void;
   t: (key: keyof Dict) => string;
 }
 
 export const LanguageContext = createContext<LanguageContextValue>({
   lang: "es",
   toggleLanguage: () => {},
   setLanguage: () => {},
   t: (key) => key,
 });
 
 export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   // Cargar idioma desde localStorage, por defecto 'es'
   const [lang, setLang] = useState<Lang>("es");
 
   useEffect(() => {
     try {
       const stored = localStorage.getItem("lang");
       if (stored === "en" || stored === "es") {
         setLang(stored);
       }
     } catch {}
   }, []);
 
   // Persistir el idioma
   useEffect(() => {
     try {
       localStorage.setItem("lang", lang);
     } catch {}
   }, [lang]);
 
   const dict = useMemo(() => (lang === "en" ? en : es), [lang]);
 
   const t = useCallback((key: keyof Dict) => {
     return dict[key] ?? String(key);
   }, [dict]);
 
   const toggleLanguage = useCallback(() => {
     setLang((prev) => (prev === "es" ? "en" : "es"));
   }, []);
 
  const setLanguage = useCallback((l: Lang) => {
    setLang(l);
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
     lang,
     toggleLanguage,
    setLanguage,
     t,
  }), [lang, toggleLanguage, setLanguage, t]);
 
   return (
     <LanguageContext.Provider value={value}>
       {children}
     </LanguageContext.Provider>
   );
 }
