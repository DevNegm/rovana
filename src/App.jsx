import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import 'swiper/css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Navigation,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'
import image9 from './assets/image9.png'
import image10 from './assets/image10.jpg'
import image11 from './assets/image11.jpg'
import image12 from './assets/image12.jpg'
import image13 from './assets/image13.jpg'
import image14 from './assets/image14.jpg'
import image15 from './assets/image15.jpg'


function App() {

  const images = [
    {
      id: 1,
      image: image1,
    },
    {
      id:2,
      image: image2,
    },
    {
      id:3,
      image: image3,
    },
    {
      id:4,
      image: image4,
    },
    {
      id:5,
      image: image5,
    },
    {
      id:6,
      image: image6,
    },
    {
      id:7,
      image: image7,
    },
    {
      id:8,
      image: image8,
    },
    {
      id:9,
      image: image9,
    },
    {
      id:10,
      image: image10,
    },
    {
      id:11,
      image: image11,
    },
    {
      id:12,
      image: image12,
    },
    {
      id:13,
      image: image13,
    },
    {
      id:14,
      image: image14,
    },
    {
      id:15,
      image: image15,
    },
  ]

  const aboutUsRef = useRef(null);
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    } else {
      console.log('Ref is null');
    }
  };

  return (
    <main id='home'>
     <Navbar handleScroll={scrollToSection} about={aboutUsRef} whyus={whyUsRef} services={servicesRef} />
     <Header/>
     <section className='section' id='about-us' ref={aboutUsRef} >
      <h2>About Us</h2>
      <h3>Rovana Tours: Your Gateway to the World</h3>
      <p>Rovana Tours is a leading group of companies specializing in all types of travel experiences. Whether you're planning a pilgrimage for Hajj or Umrah, exploring stunning domestic or international destinations, or booking flights and visas, we are here to make it all effortless. With years of expertise and a passion for travel, Rovana Tours provides comprehensive, top-tier services for every type of journey.</p>
     </section>
     <section className='section' id='why-us' ref={whyUsRef} >
      <h2>Why Us</h2>
      <h3>Affordable Excellence in Every Journey</h3>
      <p>At Rovana Tours, we believe that travel should be accessible, comfortable, and enjoyable for everyone. We offer competitive prices on all our services, from religious pilgrimages to leisure vacations. Our commitment to quality, affordability, and customer satisfaction makes us the go-to choice for travelers seeking value without compromise.</p>
     </section>
     <section className='section' id='services' ref={servicesRef}>
      <h2>Services</h2>
      <h3>Discover Our Services</h3>
      <div className='slider'>
      <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Autoplay,Navigation]}
          loop={true}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false
          }}
        >
          {images?.map((image, index) => (
              <SwiperSlide className='sliderImage' key={index}>
              <img className='singleImage' src={image?.image} alt={`Rovana image ${image?.id}`} />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
     </section>
     <Footer  handleScroll={scrollToSection} about={aboutUsRef} whyus={whyUsRef} services={servicesRef} />
    </main>
  )
}

export default App
