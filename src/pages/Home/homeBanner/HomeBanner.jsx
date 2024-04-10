// Swiper React components, modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar} from 'swiper/modules';
import 'swiper/css/bundle';
import "./swiper.css";

import 'animate.css';

import Button1 from "../../../components/Buttons/Button1"
const HomeBanner = () => {

  return (
    <div className='relative'>
        <Swiper
      modules={[Autoplay, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{draggable:true}}
      autoplay={{delay:3000, pauseOnMouseEnter:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <img src="https://i.ibb.co/fqJM5kZ/home-banner-01.jpg" alt="Home banner4" />
          <div className='overlay'></div>
      </SwiperSlide>

      <SwiperSlide>
         <img src="https://i.ibb.co/px3fwsY/Home-banner-03.jpg" alt="Home banner1" />
         <div className='overlay'></div>
      </SwiperSlide>
      
      <SwiperSlide>   
          <img src="https://i.ibb.co/c6VbGgY/home-banner-04.jpg" alt="Home banner2" />    
          <div className='overlay'></div>
      </SwiperSlide>

      <SwiperSlide>
          <img src="https://i.ibb.co/LPR03QK/home-banner-02.jpg" alt="Home banner3" />
          <div className='overlay'></div>
      </SwiperSlide>

    </Swiper>
      <div className='swiper-content absolute text-center text-white z-50 w-full h-full left-0 top-0 flex items-center'>
        <div className='max-w-4xl mx-auto px-10 space-y-1 animate__animated animate__backInUp animate__slower mt-10'>
        <small className='text-sm uppercase'>Your ideal space awaits!</small>
        <h1 className='font-bold capitalize'>Explore top-tier properties including Art Galleries, Convention Centers, Hospitals and Religious Facilities. </h1>
        <a href="" ><Button1 btnLink="Explore Now" classes="mt-6 py-2.5 md:py-3 px-6 md:px-10 font-semibold rounded-full "></Button1> </a>
        </div>
      </div>

    
    </div>
  );
};

export default HomeBanner;
