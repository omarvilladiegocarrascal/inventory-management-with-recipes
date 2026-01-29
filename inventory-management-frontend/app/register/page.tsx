"use client"
import React, { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import { AppView } from '../types/appView.type';
import { useCreateUserMutation } from '@/lib/features/users/usersApiSlice';
import { useRouter } from 'next/navigation';
import AuthLayout from '../components/Layout';
import { Oval } from 'react-loader-spinner';


export default function Register() {
    const [view, setView] = useState<AppView>(AppView.LOGIN);
  const [createUser, { isLoading, isSuccess, isError, error, data }] = useCreateUserMutation()
  const router = useRouter()

  useEffect(() => {
  if (isSuccess && data) {
    console.log('User from hook state:', data);
  }

  // if (isError) {
  //   console.log('Error from hook state:', error);
    
  // }
}, [isSuccess, isError, data, error]);

  interface valuesType {
    name: string;
    email: string;
    password: string;
    file?: File | null;
  }
  const handleRegisterSuccess = async (values: valuesType) => {
    const { file } = values;
    const createUserDto = new FormData();
    createUserDto.append('name', values.name);
    createUserDto.append('email', values.email);
    createUserDto.append('password', values.password);
    createUser({ name: values.name, email: values.email, password: values.password, file })
      .unwrap()
      .then((result) => {
        console.log('Registration successful:', result);
        window.scrollTo(0, 0);
       setTimeout(() => {
        router.push('/login')
       }, 3000);
        
      })
      .catch((err) => {
        console.log('Registration failed:', err);
      });
  };


  return (
    <div>  <AuthLayout>
     
     {isLoading && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full h-full flex items-center justify-center z-50'> <Oval
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={isLoading}
    /></div>} 
     
        <RegisterForm
          isError={isError}
          isSuccess={isSuccess}
          onSuccess={(values) => handleRegisterSuccess(values)}
          onSwitchToLogin={() => setView(AppView.LOGIN)}
        />
     
    </AuthLayout> </div>
  )
}
