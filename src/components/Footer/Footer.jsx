import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const year = new Date().getFullYear();

  AOS.init({
    duration: 1200,
  })
  

  return (
    <footer className="bg-[#080521] text-white">
      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] py-16 md:py-20 text-center text-white">
        {/* Company name */}
        <div className="w-fit mx-auto">
          <Link to="/" className="company-name font-semibold">
            <h3 className="relative px-4 py-2 text-2xl md:text-[2rem] text-[var(--clr-accent)]">
              PropertyPlex
            </h3>
          </Link>
        </div>

{/* social icons */}
        <div className="w-fit mx-auto flex text-center gap-4 text-xl pb-8 pt-2">
          <div className="w-fit mx-auto flex text-center gap-4 duration-3000">
            <a href="#"> <FaFacebook className="icon text-xl hover:scale-150 transition-all duration-3000" /> </a>
            <a href="#"> 
            <FaInstagramSquare className="icon text-xl  hover:scale-150 transition-all duration-300" /></a>
            <a href="#">
            <FaTwitter className="icon text-xl  hover:scale-150 transition-all duration-3000" />
            </a>
          </div>
        </div>

{/* contact  */}
        <div className="py-8 w-4/5 md:w-2/3 mx-auto bg-[#130e35] rounded-xl md:rounded-full my-6 flex flex-col md:flex-row items-center justify-center gap-4" data-aos="zoom-in">
          <p className="hidden lg:flex">Need Help?</p>

          <div className=" bg-[var(--bg-secondary)] rounded-full text-base  py-1 px-3 flex items-center gap-2 text-[var(--clr-primary)] font-bold">
            <IoIosMail className="text-[var(--clr-accent)] text-[1.5rem]" />
            <a
              href="mailto:mr.xyz@gmail.com"
              className="hover:text-[var(--clr-accent)]"
            >
              mr.xyx@gmail.com
            </a>
          </div>
          <div className=" bg-[var(--bg-secondary)] rounded-full text-base  py-1 px-3 flex items-center gap-2 text-[var(--clr-primary)] font-bold">
            <FaWhatsappSquare className="text-[var(--clr-accent)] text-[1.5rem]" />
            <a
              href="tel:+8801852424440"
              className="hover:text-[var(--clr-accent)]"
            >
              +880 1852 424440
            </a>
          </div>
        </div>

{/* copyright */}
        <p className="capitalize pt-4">
          @ Copyright, all right reserved - {year}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
