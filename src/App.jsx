import { useRef, useState } from 'react'
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
import { FaKaaba, FaPhone, FaPlaneDeparture, FaRegNewspaper } from 'react-icons/fa6';
import { RiCustomerServiceFill, RiGalleryFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';

function App() {
const [current, setCurrent] = useState(1);
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

  const titles = [{
    id:1,
    name:'اخبار',
    icon:<FaRegNewspaper />,
  },
  {
    id:2,
    name:'حجز طيران وتأشيرات',
    icon:<FaPlaneDeparture />,
  },
  {
    id:3,
    name:'حج وعمرة',
    icon:<FaKaaba />
  },
  {
    id:4,
    name:'فروع الشركة',
    icon:<GoLocation />
  },
  {
    id:5,
    name:'خدمة العملاء',
    icon:<RiCustomerServiceFill />,
  },
  {
    id:6,
    name:'معرض الصور والفيديوهات',
    icon:<RiGalleryFill />
  }
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
     <div className='cards'>

      {titles?.map((title, index) => (
        <a href={`#${title?.id}`} className='card' onClick={() => setCurrent(title?.id)} key={index} style={{backgroundColor:current === title?.id && '#fff',color:current === title?.id && '#021969',border:current === title?.id ? '1px solid #0218695a' : '1px solid #fff'}}>
          {title?.icon}
          <p style={{color:current === title?.id && '#021969'}}>{title?.name}</p>
        </a>  
      ))}
     </div>
     {current === 1 && (<>
      <h2 id='1'>اخر الاخبار</h2>
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
     </>)}
     {current === 2 && (<>
      <h2 id='2'>حجز طيران وتأشيرات</h2>
      <div className='cards'>
        <div className='card'>
        <a href="tel:01070750012" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750012
            </a>
        </div>
        <div className='card'>
        <a href="tel:01070750018" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750018
            </a>
        </div>
      </div>
     </>)}
     {current === 3 && (<>
      <h2 id='3'>حجز الحج والعمرة</h2>
      <div className='cards'>
        <div className='card'>
        <a href="tel:01070750015" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750015
            </a>
           
        </div>
        <div className='card'>
        <a href="tel:01070750010" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750010
            </a>
        </div>
      </div>
     </>)}
     {current === 4 && (<>
      <h2 id='4'>فروع الشركة</h2>
      <div className='map'>
      <p>فرع طنطا</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3427.9477181389148!2d31.01303097558213!3d30.776046774563376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ2JzMzLjgiTiAzMcKwMDAnNTYuMiJF!5e0!3m2!1sen!2seg!4v1727647679832!5m2!1sen!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map1"
      ></iframe>
      <p>فرع بلبيس</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3440.3886308792366!2d31.55467987556835!3d30.42508317473414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI1JzMwLjMiTiAzMcKwMzMnMjYuMSJF!5e0!3m2!1sen!2seg!4v1727647714054!5m2!1sen!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map2"
      ></iframe>
      <p>فرع اسماعيلية</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.519797903364!2d32.2666493!3d30.591098600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8598a00a0278d%3A0xb944acdc8986eec7!2z2LTYsdmD2Ycg2LHZiNmB2KfZhtinINmE2YTYs9mK2KfYrdmH!5e0!3m2!1sen!2seg!4v1727647730439!5m2!1sen!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map3"
      ></iframe>
     </div>
     </>)}
     {current === 5 && (<>
      <h2 id='5'>خدمة العملاء</h2>
      <div className='cards'>
        <div className='card'>
        <a href="tel:01070750016" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
                <FaPhone/> 01070750016
            </a>
        </div>
        <div className='card'>
        <a href="tel:01070750013" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01070750013
            </a>
        </div>
        <div className='card'>
        <a href="tel:01030990932" style={{display:'flex',alignItems:'center',gap:'0.5rem'}} target='_blank'>
            <FaPhone/> 01030990932
            </a>
        </div>
      </div>
     </>)}
     {current === 6 && (<>
      <h2 id='6'>معرض الصور والفيديوهات</h2>
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
     </>)}
     </section>
     <Footer  handleScroll={scrollToSection} about={aboutUsRef} whyus={whyUsRef} services={servicesRef} />
    </main>
  )
}

export default App
