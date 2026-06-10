"use client"
import React, { useEffect } from 'react'
import Hero from './Home/Hero/Hero'
import Services from './Home/Services/Services'
import Resume from './Home/Resume/Resume'
import Projects from './Home/Projects/Projects'
import Skills from './Home/Skills/Skills'
import Contact from './Home/Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: "top-bottom",
    })
  }, [])

  return (
    <div className="overflow-hidden">

      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="resume">
        <Resume />
      </div>

      <div id="works">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </div>
  )
}

export default Home
