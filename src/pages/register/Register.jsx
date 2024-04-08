import { Link } from "react-router-dom";
import Button1 from "../../components/Buttons/Button1";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="bg-[var(--bg-secondary)] min-h-screen flex items-center justify-center">
    <div className="md:w-1/2 max-w-xl mx-auto px-8 md:px-8 lg:px-12 xl:px-16">
      {/* Welcome section */}
      <div className="bg-[#4a435f] relative  shadow-xl rounded-t-2xl">
        <img
          src="https://i.ibb.co/X7y8Gwf/Register2.png"
          alt=""
          className="mix-blend-overlay h-full overflow-hidden rounded-t-2xl"
        />
      </div>

      {/* form section */}
      <div className="bg-white px-8 pb-8 w-full items-center py-6 rounded-md">
        <form className="w-full">            
          <h2 className="mt-8 mb-6">
            Please Register
          </h2>


          <div className="relative w-full z-0 mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Name
            </label>
          </div>

          <div className="relative w-full z-0 mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Email
            </label>
          </div>


          <div className="relative w-full z-0 mb-6 group">
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Url of your Photo
            </label>
          </div>

          <div className="relative w-full z-0 mb-6 group">
            <input
              type={showPass? "text" : "password"}
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
              placeholder=" "
              required
            />
            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-2 text-xl text-[var(--clr-accent)] cursor-pointer">
              {
                showPass? <BsEyeSlashFill></BsEyeSlashFill> : <BsEyeFill></BsEyeFill>
              }
            </span>
            <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Password
            </label>
          </div>
            
            <Button1  btnLink="Register" classes="w-full py-2 mt-4"></Button1>
    

            <div className="text-sm font-medium w-full text-center mt-4 py-4">
              Have an Account? <Link
                to="/login"
                className="text-[var(--clr-accent)]  hover:text-[var(--clr-primary)] font-bold underline"
              >
                 Login Now
              </Link>
            </div>            
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;