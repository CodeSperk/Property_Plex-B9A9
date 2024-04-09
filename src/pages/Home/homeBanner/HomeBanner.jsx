// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay, Scrollbar} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css/bundle';


import "./swiper.css";
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
      <div className='swiper-content absolute top-1/2 left-1/2 text-center text-white z-50 -translate-x-1/2 -translate-y-1/2'>
        <h1>Hello there</h1>
        <p>You are welcome</p>
      </div>

    
    </div>
  );
};

export default HomeBanner;
