
import React from 'react';
import { Logo } from '../constants/Logo';
import { useLanguage } from '../hooks/useLanguage';


interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const {t} = useLanguage()
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Side: Hero Section */}
      <div className="relative hidden lg:flex w-5/12 flex-col justify-center bg-primary/10 dark:bg-primary/5 p-12 xl:p-24 overflow-hidden">
        <div className="absolute top-10 left-10 flex items-center gap-2">
          <div className="text-primary">
            <Logo className="size-8" />
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Mint & Slate</h2>
        </div>
        
        <div className="z-10">
          <h1 className="text-slate-900  dark:text-white text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            {t('register-message-header')}<br />
            <span className="text-primary">{t('register-message-header-span')}</span> 
            
          </h1>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-6">
            {t('register-message-header-smart')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
            {t('register-message-body')}
          </p>
        </div>

        {/* Abstract Decoration */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      {/* Right Side: Form Workspace */}
      <div className="flex-1 bg-white dark:bg-background-dark flex items-center justify-center p-6 lg:p-12 xl:p-24">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
