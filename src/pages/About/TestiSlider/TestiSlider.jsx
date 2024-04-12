import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testiSlider.css";

import { Keyboard, Pagination } from "swiper/modules";
import { LuQuote } from "react-icons/lu";

const TestiSlider = ({ clientData }) => {
  
  return (
    <div className="testiSwiper-container mt-8 md:mt-16 bg-[var(--bg-secondary)]">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={20} 
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
        className="mySwiper"
      >
        {clientData.map((singleData) => (
          <SwiperSlide key={singleData.id}>
            <div className="max-w-[400px] h-full flex justify-center items-center mx-auto">

              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto">
                  <img
                    src={singleData.profileImg}
                    alt=""
                    className="w-ful h-full rounded-full border-2 border-[var(--clr-accent)]"
                  />
                </div>

                <div className="">
                  <h3>{singleData.name}</h3>
                  <small>{singleData.profession}</small>
                  <p className="max-[275px] mx-auto"> {singleData.feedback} </p>
                </div>
                <LuQuote className="text-3xl text-[var(--clr-accent)] mx-auto" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

TestiSlider.propTypes = {
  clientData: PropTypes.object,
};
export default TestiSlider;
