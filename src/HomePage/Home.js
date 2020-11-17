import React from 'react'
import MainSection from './mainSection'
import '../App.css'
import Cards from './Cards'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Cards />
      <Footer />
    </>
  )
}
