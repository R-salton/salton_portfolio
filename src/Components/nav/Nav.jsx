import React from 'react'
import './Nav.css';
import {BiHomeCircle} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'  
import {BiBookAlt} from 'react-icons/bi' 
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md' 
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><BiHomeCircle /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav