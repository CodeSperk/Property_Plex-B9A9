import { Link } from "react-router-dom";
import Button1 from "../../components/Buttons/Button1";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ErrorPage = () => {


  const navigateToHome = <Link to="/" className="flex items-center gap-2 uppercase font-bold justify-center"><FaArrowLeft /> Home</Link>
  const navigateToContact = <Link className="flex items-center gap-2 uppercase font-bold justify-center"><MdOutlineEmail className="text-lg"/> Contact</Link>

  return (
    <div className="max-h-screen min-h-screen bg-[url('https://i.ibb.co/zHdXSV4/error-Page.jpg')] bg-no-repeat bg-cover bg-center relative">
            <div className="bg-black bg-opacity-50 h-full w-full absolute flex flex-col justify-center items-center text-white">
                  <h3 className="mb-4">Page Not Found</h3>
                  <div className="w-10 border-b-2 border-[var(--clr-accent)]"></div>
                  <h1 className=" text-9xl mb-6">404</h1>
                  <div className="flex gap-6">
                    <Button1 btnLink={navigateToHome} classes="px-3 py-2 w-36"></Button1>

                    <Button1 btnLink={navigateToContact} classes="px-3 py-2 w-36 hidden md:flex border-white bg-transparent"></Button1>
                  </div>
            </div>
    </div>
  );
};

export default ErrorPage;