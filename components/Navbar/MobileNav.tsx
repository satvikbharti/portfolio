"use client"
import { NavLinks } from '@/constant/constant'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  const handleScroll = (id: string) => {
    // 1️⃣ close menu first
    closeNav()

    // 2️⃣ scroll after menu starts closing
    setTimeout(() => {
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black opacity-70 transition-all duration-500 z-[100002]
        ${navOpen}`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-[80%] sm:w-[60%] bg-cyan-800
        text-white flex flex-col justify-center space-y-6
        transition-all duration-500 delay-300 z-[100050]
        ${navOpen}`}
      >
        {NavLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.url)}
            className='text-left text-white w-fit text-2xl ml-12
            border-b-[1.5px] pb-1 border-white sm:text-[30px]'
          >
            {link.Label}
          </button>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem]
          w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default MobileNav
