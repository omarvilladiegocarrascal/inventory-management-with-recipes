import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Logo } from '../constants/Logo';
import Link from 'next/link';
import { AlertBanner } from '../Layout/Alerts/Alerts';
import { useLanguage } from '../hooks/useLanguage';

interface RegisterFormProps {
  onSuccess: (data: {
    name: string;
    email: string;
    password: string;
    file: File;
  }) => void;
  onSwitchToLogin: () => void;
  isSuccess: boolean;
  isError: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
  isSuccess,
  isError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {t} = useLanguage()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      file: null as File | null,
    },
    onSubmit: (values) => {
      if (!values.file) return;

      onSuccess({
        name: values.name,
        email: values.email,
        password: values.password,
        file: values.file,
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    formik.setFieldValue('file', file);
  };

  return (
    <div className="w-full max-w-[480px] flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Mobile Header */}
       {isSuccess && <AlertBanner status="success" description={t("registration_successful")} />}
       {isError && <AlertBanner status="error" description={t("registration_failed")} />}
      <div className="flex lg:hidden items-center gap-2 mb-4">
        <div className="text-primary">
          <Logo className="size-6" />
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold">
          Mint & Slate
        </h2>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
          {t("create_account")}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {t("join_intro")}
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        {/* Profile Picture */}
        <div className="flex flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
            {t("profile_picture")}
          </p>

          <div className="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all cursor-pointer bg-slate-50/50 dark:bg-slate-800/30 overflow-hidden">
            {formik.values.file ? (
              <img
                src={URL.createObjectURL(formik.values.file)}
                alt={t("profile_picture_preview")}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-500">
                <span className="material-symbols-outlined text-4xl">
                  cloud_upload
                </span>
                <span className="text-sm font-medium">
                  {t("profile_picture_preview")}
                </span>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
            {t("fullname")}
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder={t("examplename")}
            className="w-full px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
            {t("email_address")}
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder={t("examplemail")}
            className="w-full px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
            {t("password")}
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              placeholder={t("create_strong_password")}
              className="w-full px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-95 text-slate-900 font-bold text-lg rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            <span>{t("create_account")}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Switch to Login */}
        <div className="mt-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {t("already_have_account")}
            <Link
              href="/login"
              onClick={onSwitchToLogin}
              className="text-primary font-bold hover:underline ml-1"
            >
              {t("login")}
            </Link>
          </p>
        </div>
      </form>

      {/* Footer */}
      <footer className="mt-auto text-center">
        <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
          <a className="underline ml-1" href="#">
            {t("terms_of_service")}
          </a>{' '}
          {t("and")}
          <a className="underline ml-1" href="#">
            {t("privacy_policy")}
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default RegisterForm;
