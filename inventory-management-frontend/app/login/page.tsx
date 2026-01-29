"use client"
import { useFormik } from "formik";
import AuthLayout from "../components/Layout";
import Link from "next/link";
import { useLoginUserMutation } from "@/lib/features/users/usersApiSlice";

export default function Login() {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
     const loginFormik = useFormik({
        initialValues: {
          email: 'julian@kitchen.com',
          password: 'password123',
        },
        onSubmit: () => {
          const { email, password } = loginFormik.values;
          loginUser({ email, password }).unwrap().then((response) => {
            console.log(response);
            // Guardar cookie
            document.cookie = `milogin=${response.access_token}; path=/; max-age=3600`;
            if(response.access_token){
              window.location.href = '/create-organization';
            }
          }).catch((error) => {
            console.log(error);
          })
        },
      });
    return (
        <AuthLayout>
        <div className="w-full max-w-[480px] flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              Welcome Back
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Log in to manage your kitchen inventory.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={loginFormik.handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="name@kitchen.com"
                className="w-full px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold px-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={loginFormik.values.password}
                onChange={loginFormik.handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-95 text-slate-900 font-bold text-lg rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
            >
              <span>Log In</span>
              <span className="material-symbols-outlined">login</span>
            </button>
          </form>

          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Don't have an account?
              <Link
                 href="/"
                className="text-primary font-bold hover:underline ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>   
        </AuthLayout>
    )
}