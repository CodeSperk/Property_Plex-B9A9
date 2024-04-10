import { IoCall } from "react-icons/io5";
import PropTypes from "prop-types";
import "./banner.css";

const BannerCard = ({ estateTitle }) => {
  return (
    <div className="bg-white bg-opacity-30 hidden md:flex flex-col p-6 ml-auto mr-auto rounded-md">

      <div className="flex text-black gap-4">
        <img
          src="https://i.ibb.co/mS8JbdH/ppMahbub.jpg"
          alt=""
          className="w-16 h-16 rounded-full"
        />

        <div className="flex flex-col ">
          <p className="font-semibold">Mahbubur Rahman</p>
          <small>Executive</small>
          <div className="flex gap-2 items-center">
            <IoCall />
            <a
              href="tel:+8801852424440"
              className="hover:text-[var(--clr-accent)] text-sm"
            >
              +880 1852 424440
            </a>
          </div>
        </div>
      </div>

      <form action="">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Your Phone" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder={`Hello, I'm interested in ${estateTitle} ...`}
          className="number-input"
        ></textarea>
        <button className="border-2 border-[var(--clr-secondary)] hover:bg-[var(--clr-accent)] text-[var(--clr-accent)] hover:text-white uppercase text-sm font-semibold py-4">
          Send Direct Message
        </button>
      </form>
    </div>
  );
};

BannerCard.propTypes = {
  estateTitle: PropTypes.string,
};

export default BannerCard;
