import { useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import 'swiper/css';
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
import image10 from './assets/image10.JPG'
import image11 from './assets/image11.JPG'
import image12 from './assets/image12.JPG'
import image13 from './assets/image13.JPG'
import image14 from './assets/image14.JPG'
import image15 from './assets/image15.JPG'
import aboutImage from './assets/about.jpg'
import whyus from './assets/whyus.jpg'

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
     <section className='section' style={{marginTop:'2rem'}} id='about-us' ref={aboutUsRef} >
     <img src={aboutImage} alt="نبذة عنا" />
      <div className='content'>
      <h2>نبذة عنا</h2>
      <h3>روفانا تورز: بوابتك إلى العالم</h3>
      <p>روفانا تورز هي شركة مساهمة مصرية و متخصصة في جميع أنواع تجارب السفر. سواء كنت تخطط لرحلة حج أو عمرة، أو لاستكشاف وجهات سياحية رائعة محليًا أو دوليًا، أو لحجز تذاكر الطيران والتأشيرات، نحن هنا لجعل كل ذلك سهلًا. بفضل سنوات من الخبرة وشغفنا بالسفر، تقدم روفانا تورز خدمات شاملة ورفيعة المستوى لجميع أنواع الرحلات.</p>
      </div>
     </section>
     <section className='section' id='why-us' ref={whyUsRef} >
      <div className='content'>
      <h2>لماذا نحن</h2>
      <h3>التميز بأسعار معقولة في كل رحلة</h3>
      <p>في روفانا تورز، نؤمن بأن السفر يجب أن يكون متاحًا، مريحًا، وممتعًا للجميع. نقدم أسعارًا تنافسية على جميع خدماتنا، بدءًا من الرحلات الدينية إلى الإجازات الترفيهية. التزامنا بالجودة، الأسعار المعقولة، ورضا العملاء يجعلنا الخيار الأمثل للمسافرين الذين يبحثون عن القيمة دون تنازل.</p>
      </div>
     <img src={whyus} alt="لماذا نحن" />

     </section>
     <section className='section2' id='services' ref={servicesRef}>
      <h2>خدماتنا</h2>
      <h3>اكتشف ما نقدم</h3>
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
