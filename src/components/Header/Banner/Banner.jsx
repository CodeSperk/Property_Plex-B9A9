import PropTypes from "prop-types";
import { FaWhatsappSquare } from "react-icons/fa";
import "./banner.css";
import { IoCall } from "react-icons/io5";
import BannerCard from "./BannerCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = ({ estate }) => {

  const {
    id,
    estate_title,
    status,
    segment_name,
    area,
    image,
    facilities,
    description,
    price,
    location,
    banner,
  } = estate;
  console.log(banner);




  Aos.init({
    duration: 1200,
  });
  
  return (
    <div>
      <div
        className="h-[460px] md:h-[580px] lg:h-[730px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black bg-opacity-30 z-10 h-full w-full">
          {/* banner  content */}
          <div className="max-w-7xl w-full h-full mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] flex justify-center items-center py-10">
            <div className="w-full flex text-white md:flex justify-between items-end">
              {/* banner text content */}
              <div className="flex-grow" data-aos="fade-right">
              <small className="text-xs bg-[var(--clr-accent)] py-1 px-2 font-normal uppercase rounded mb-2">{status}</small>
                <h1 className="font-bold uppercase">
                  Insight <br /> {estate_title}
                </h1>
                <p className="mb-4 text-xl">{location}</p>
                <div className="flex items-end gap-4">
                  <h3 className="text-2xl pb-0 mb-0">{price}</h3>{" "}
                  <small>{area}</small>
                </div>
              </div>

              <div data-aos="fade-left">
              <BannerCard ></BannerCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  estate: PropTypes.object,
};

export default Banner;
