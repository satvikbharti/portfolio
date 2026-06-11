"use client"
import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'


type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90)
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const downloadCV = () => {
    toast.success("📄 CV download started!")

    const link = document.createElement("a")
    link.href = "/Satvik_Bharti_CV.pdf"
    link.download = "Satvik_Bharti_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        toastClassName="custom-toast"

        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={`  fixed w-full h-[12vh] z-[10000] transition-all duration-200 ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''}`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>

          <div className='flex items-center space-x-2'>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaCode className='w-5 h-5 text-black' />
            </div>
            <h1 className='text-xl hidden sm:block text-white font-bold'>SATVIK</h1>
          </div>

          <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.url)}
                className='text-base cursor-pointer hover:text-cyan-300 text-white font-medium transition-all duration-200'
              >
                {link.Label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={downloadCV}
              className='cursor-pointer px-8 py-3.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white flex items-center space-x-2'
            >
              <BiDownload className='w-5 h-5' />
              <span>Download CV</span>
            </button>


            <HiBars3BottomRight
              onClick={openNav}
              className='w-8 h-8 cursor-pointer text-white lg:hidden'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
