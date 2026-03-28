// import './App.css'
import React, { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Marque from "./components/Marque"
import About from "./components/About"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import CustomCursor from "./components/CustomCursor"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

function App() {
  const [progress, setProgress] = useState(0)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const scroll = new LocomotiveScroll()

    return () => {
      scroll.destroy()
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        const increment = Math.floor(Math.random() * 8) + 2
        return Math.min(prev + increment, 100)
      })
    }, 70)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const hideTimer = setTimeout(() => {
        setShowLoader(false)
      }, 350)

      return () => clearTimeout(hideTimer)
    }
  }, [progress])

  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showLoader])

  return (
    <>
      <CustomCursor />
      {showLoader && <LoadingScreen progress={progress} />}
      <Navbar />
      <LandingPage isPageReady={!showLoader} />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </>
  )
}

export default App
