"use client"
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {

  const [showNav, setshowNav] = useState(false)

  const openNavHandler = () => setshowNav(true);
  const closeNavHandler = () => setshowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav
