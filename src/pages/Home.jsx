import React from 'react'
import AddSection from '../component/AddSection'
import Features from '../component/Features'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Hero from '../component/Hero'
import Logos from '../component/Logos'


export default function Home() {
  return (
    <> 
       <Header/>
       <Hero/>
       <Logos/>
       <Features/>
       <AddSection/>
       <Footer/>
    </>
  )
}
