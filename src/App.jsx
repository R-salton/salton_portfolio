import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testmonials from './Components/Testmonials/Testmonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testmonials />
    <Contacts />
    <Footer />
    </>
    
  )
}

export default App