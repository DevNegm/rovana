import React from 'react'
import classes from './Footer.module.scss'
import logo from '../assets/logo.jpg'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = ({handleScroll,whyus,about,services}) => {
  return (
    <footer className={classes.footer}>
        <div className={classes.footerLinks}>
            <a href="#home"><img src={logo} alt="Rovana" /></a>
        </div>
        <div className={classes.footerLinks}>
        <p>Quick Links</p>
            <a href="#home">Home</a>
            <a href="#about-us" onClick={() => {handleScroll(about)}}>About Us</a>
            <a href="#why-us" onClick={() => {handleScroll(whyus)}}>Why Us</a>
            <a href="#services" onClick={() => {handleScroll(services)}}>Our Services</a>
        </div>
        <div className={classes.footerLinks}>
            <p>Social Media</p>
            <div className={classes.social}>
            <a href="https://www.facebook.com/profile.php?id=61553590025215" target='_blank'>
                <FaFacebook/>
            </a>
            <a href="https://wa.me/+201008854932" target='_blank'>
                <IoLogoWhatsapp/>
            </a>
            </div>
            <small>© 2024 Rovana Tours. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer