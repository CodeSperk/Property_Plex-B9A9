import PropTypes from "prop-types";
import Button1 from "../../../components/Buttons/Button1";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaHandPointRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EstateCard = ({ estate, index }) => {
  const { id, estate_title, status, area, image, facilities, price } = estate;

  const btnLink = <Link to={`/estate/${id}`}>View Property</Link>;

  const animationDirection = index % 2 === 0 ? 'fade-right' : 'fade-left';

  //Aos function
  AOS.init();
  AOS.init({
  duration: 1200, 
  anchorPlacement: 'top-bottom',
  });

  const bgColor = status.toLowerCase() === "for sale" ? "#782685" : "var(--clr-accent)";
  

  return (
    <div className="h-[650px] md:h-[450px] lg:h-[420px] bg-[var(--bg-secondary)]  border p-4 flex flex-col-reverse md:flex-row gap-4" data-aos={animationDirection}>
      
      <div className="flex flex-col justify-between space-y-4 md:w-1/2 ">
        
       
         
          <h3 className="text-center border-b-2 border-[var(--clr-accent)] text-[var(--clr-accent)] text-xl tracking-wider font-semibold  uppercase px-2 py-2 rounded mb-4">
          {estate_title}
        </h3>
          
        <div>
   
          <ul>
            <h5 className="font-semibold text-base">Facilities :</h5>
            {facilities.map((facility, idx) => (
              <li key={idx} className="ml-4 flex gap-2 items-center">
                {" "}
                <FaHandPointRight /> {facility}
              </li>
            ))}
          </ul>
        
            <p className="mt-2">
              <span className="font-semibold text-base">Area : </span>{" "}
              {area}
            </p>
            <p className="mt-2 md:mt-6">
              <span className="font-semibold">Price : </span>{" "}
              <span className="text-lg md:text-xl font-bold">{price}</span>
            </p>
           
       
        </div>

        <Link to={`/estate/${id}`} className="relative cursor-pointer">
        <Button1 btnLink={btnLink} classes="w-full  font-bold"></Button1>

        <FaExternalLinkAlt className="absolute top-1/2 -translate-y-1/2 right-4 text-white"/>
        </Link>
      </div>

      <div
        className="md:w-1/2 h-1/2 md:h-full bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${image[0]})` }}
      >
        <div className={`text-sm w-fit text-white py-1 px-2 absolute right-2 top-2 rounded capitalize}`} style={{backgroundColor: bgColor}}>
          {status}
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
