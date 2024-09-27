import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import logo from '../assets/logo.jpg'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';
const Navbar = ({handleScroll,whyus,about,services}) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    if(toggle) {
        return (
            <nav className={classes.mobileNav}>
                <div className={classes.navContainer}>
                   <div className={classes.logoContainer}>
                   <a href="#" className={classes.logo} onClick={() => {handleToggle()}}><img src={logo} alt="Rovana" /></a>
                    <button className={classes.navBtn} onClick={handleToggle}>
                        <IoMdClose />
                    </button>
                   </div>
                   <div className={classes.navLinks}>
                    <a href="" onClick={() => {handleToggle()}}>الرئيسية</a>
                    <a href="" onClick={() => {handleToggle(); handleScroll(about)}}>نبذة عنا</a>
                    <a href="" onClick={() => {handleToggle(); handleScroll(whyus)}}>لماذا نحن</a>
                    <a href="" onClick={() => {handleToggle(); handleScroll(services)}}>خدماتنا</a>
                    <a href="https://wa.me/+201008854932" target='_blank' onClick={() => handleToggle()}>تواصل معنا</a>
                   </div>
                </div>
            </nav>
        )
    }
  return (
    <nav className={classes.nav}>
        <div className={classes.navContainer}>
            <a href="#home" className={classes.logo}><img src={logo} alt="Rovana" /></a>
            <div className={classes.navLinks}>
            <a href="#home">الرئيسية</a>
            <a href="#about-us" onClick={() => handleScroll(about)}>نبذة عنا</a>
            <a href="#why-us" onClick={() => handleScroll(whyus)}>لماذا نحن</a>
            <a href="#services" onClick={() => handleScroll(services)}>خدماتنا</a>
            </div>
           
            <a href="https://wa.me/+201008854932" target='_blank' className={classes.contact}>
            تواصل معنا
            </a>
            <button className={classes.navBtn} onClick={handleToggle}>
                <IoMenuOutline />
            </button>
        </div>
    </nav>
  )
}

export default Navbar