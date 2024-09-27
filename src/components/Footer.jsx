import React from 'react'
import classes from './Footer.module.scss'
import logo from '../assets/logo.jpg'
import { FaFacebook, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = ({handleScroll,whyus,about,services}) => {
  return (
    <footer className={classes.footer}>
        <div className={classes.footerLinks}>
            <a href="#home"><img src={logo} alt="Rovana" /></a>
        </div>
        <div className={classes.footerLinks}>
        <p>روابط سريعة</p>
            <a href="#home">الرئيسية</a>
            <a href="#about-us" onClick={() => {handleScroll(about)}}>نبذة عنا</a>
            <a href="#why-us" onClick={() => {handleScroll(whyus)}}>لماذا نحن</a>
            <a href="#services" onClick={() => {handleScroll(services)}}>خدماتنا</a>
        </div>
        <div className={classes.footerLinks}>
        <p>خدمة العملاء</p>
             <a href="tel:01070750016" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750016
            </a>
            <a href="tel:01070750013" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750013
            </a>
            <a href="tel:01030990932" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01030990932
            </a>
        </div>
        <div className={classes.footerLinks}>
        <p>حجز طيران وتأشيرات</p>
             <a href="tel:01070750012" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750012
            </a>
            <a href="tel:01070750018" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750018
            </a>
        </div>
        <div className={classes.footerLinks}>
        <p>حجز الحج والعمرة</p>
             <a href="tel:01070750015" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750015
            </a>
            <a href="tel:01070750010" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750010
            </a>
        </div>
        <div className={classes.footerLinks}>
        <p>للشكاوي</p>
             <a href="tel:01070750010" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750010
            </a>
        </div>
        <div className={classes.footerLinks}>
            <p>وسائل التواصل الاجتماعي</p>
            <div className={classes.social}>
            <a href="https://www.facebook.com/profile.php?id=61553590025215" target='_blank'>
                <FaFacebook/>
            </a>
            <a href="https://wa.me/+201008854932" target='_blank'>
                <IoLogoWhatsapp/>
            </a>
          
            <a href="https://www.instagram.com/rovanatours1?igsh=MWJrZTU2NnBkdnlucA%3D%3D" target='_blank'>
                <FaInstagram/>
            </a>
            <a href="https://www.tiktok.com/@rovana.tours?_t=8px6CXiLqsh&_r=1" target='_blank'>
                <FaTiktok/>
            </a>
            </div>
        </div>
        <div className={classes.footerLinks} style={{width:'100%'}}>
        <p style={{textAlign:'center',paddingTop:'2rem'}}>© 2024 Rovana Tours. جميع الحقوق محفوظه. رقم ترخيص الشركة 528</p>
        </div>
    </footer>
  )
}

export default Footer