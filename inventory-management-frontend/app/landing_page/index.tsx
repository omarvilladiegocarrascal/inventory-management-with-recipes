import React, { useEffect, useState } from 'react'
import TopNavBar from './components/TopNavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  
  return (
      <div className="bg-background-light dark:bg-background-dark text-[#0e1b1b] dark:text-gray-100 transition-colors duration-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <TopNavBar />
          <Hero />
          <Features />
          <Roles />
          <FinalCta />
          <Footer />
        </div>
      </div>
    </div>
  )
}
