import { HiHomeModern, HiOutlineHomeModern } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";

const Explore = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between mt-8 md:mt-12">
      <div className="text-center bg-[var(--bg-secondary)] py-4 shadow-md rounded hover:shadow-xl cursor-pointer">
          <RiTeamFill className="mx-auto text-5xl" />
          <h4>Meet our agents</h4>
      </div>
      <div className="text-center bg-[var(--bg-secondary)] py-4 shadow-md rounded hover:shadow-xl cursor-pointer">
          <HiOutlineHomeModern className="mx-auto text-5xl" />
          <h4>Rent a Property</h4>
      </div>

      <div className="text-center bg-[var(--bg-secondary)] py-4 shadow-md rounded hover:shadow-xl cursor-pointer">
          <HiHomeModern className="mx-auto text-5xl" />
          <h4>Buy a Property</h4>
      </div>

      <div className="text-center bg-[var(--bg-secondary)] py-4 shadow-md rounded hover:shadow-xl cursor-pointer">
          <IoMailOpenOutline className="mx-auto text-5xl" />
          <h4>Contact us</h4>
      </div>


    </div>
  );
};

export default Explore;
