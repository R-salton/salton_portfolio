import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/saltonc.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Salton</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header