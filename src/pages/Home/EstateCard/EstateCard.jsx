import PropTypes from "prop-types";
import Button1 from "../../../components/Buttons/Button1";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaHandPointRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EstateCard = ({ estate, index }) => {
  const { id, estate_title, status,segment_name, area, image, facilities } = estate;

  const btnLink = <Link to={`/estate/${id}`}>View Property</Link>;

  const animationDirection = index % 2 === 0 ? 'fade-right' : 'fade-left';

  //Aos function
  AOS.init();
  AOS.init({
  duration: 1200, 
  anchorPlacement: 'top-bottom',
  });




  return (
    <div className="h-[470px] lg:h-[420px] bg-[var(--bg-secondary)]  border p-4 flex flex-col-reverse md:flex-row gap-4" data-aos={animationDirection}>
      
      <div className="pt-4 flex flex-col justify-between space-y-4 md:w-1/2 ">
        
        <div className="ml-2">
          <h3 className="text-2xl">{estate_title}</h3>
          <ul>
            <h5 className="font-semibold text-base">Facilities :</h5>
            {facilities.map((facility, idx) => (
              <li key={idx} className="ml-4 flex gap-2 items-center">
                {" "}
                <FaHandPointRight /> {facility}
              </li>
            ))}
          </ul>
          <div className="flex lg:flex-col gap-2 md:gap-6 mt-2 mb-6">
            <p>
              <span className="font-semibold text-base">Area : </span>{" "}
              {area}
            </p>
            <p>
              <span className="font-semibold text-base">Status : </span> For{" "}
              {status}
            </p>
          </div>
        </div>
        <Link to={`/estate/${id}`} className="relative cursor-pointer">
        <Button1 btnLink={btnLink} classes="w-full border-[#4b41c1] text-[#4b41c1] font-bold bg-transparent"></Button1>
        <FaExternalLinkAlt className="absolute top-1/2 -translate-y-1/2 right-4 text-[#4b41c1]"/>
        </Link>
      </div>

      <div
        className="md:w-1/2 h-1/2 md:h-full relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image[0]})` }}
      >
        <div className="absolute bottom-0 right-0 z-10 text-center bg-black bg-opacity-30 rounded-tl-md p-1 text-[var(--clr-accent)] text-white text-base">
          {segment_name}
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object,
  index: PropTypes.number.isRequired
};

export default EstateCard;
