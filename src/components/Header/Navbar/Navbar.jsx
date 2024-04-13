import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Button1 from "../../Buttons/Button1";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2';
import 'animate.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(false);
  
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          icon: "Success",
          title: "Logout Successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const menuLists = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li id="list">
        <NavLink to="/update">UpdateProfile</NavLink>
      </li>
      <li id="list">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  const loginBtnLink = (
    <>
      <Link to="/login">Login</Link>
    </>
  );
  const logoutBtnLink = (
    <>
      <Link onClick={handleLogout}>Logout</Link>
    </>
  );

  const userName = user?.displayName
    ? user.displayName
    : "Update Your Name";
  const email = user?.email
    ? user.email
    : "No email found";
  const userPhoto = user?.photoURL
    ? user.photoURL
    : "https://i.ibb.co/kg3gz62/c0749b7cc401421662ae901ec8f9f660-removebg-preview.png";

  return (
    <nav className="z-50 bg-white py-2 md:py-3 bg-opacity-60 shadow-sm fixed w-full">
      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] navbar flex justify-between relative">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl mb-2 border-2 p-1 border-[var(--clr-accent)] rounded hover:text-[--clr-accent]"
            >
              <GiHamburgerMenu />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-4 py-6 shadow bg-[var(--bg-primary)] rounded-box w-52"
            >
              {menuLists}
            </ul>
          </div>

          <Link to="/" className="company-name font-semibold hidden md:block">
            <h3 className="relative px-4 py-2 text-2xl text-[var(--clr-accent)]">PropertyPlex</h3>
          </Link>
        </div>
        

        <div className="hidden lg:flex justify-center items-center animate__animated animate__backInDown animate__slower flex-grow text-center">
          <ul className="menu menu-horizontal px-1">{menuLists}</ul>
        </div>

       
        {user ? (
          <div className="flex gap-3 items-center w-fit relative">
            <div className="tooltip tooltip-left w-fit" data-tip={userName}>
              <div className="w-11 h-11 border-2 border-[var(--clr-accent)] rounded-full hover:cursor-pointer" onClick={() => setProfile(!profile)}>
                <img
                  src={userPhoto}
                  alt="User Photo"
                  className="rounded-full h-full"
                />
              </div>
            </div>
            <Button1 btnLink={logoutBtnLink} classes="w-fit"></Button1>
          </div>
        ) : (
          <Button1 btnLink={loginBtnLink} classes="w-fit"></Button1>
        )}




      {/* user profile */}
      {
        profile && 
        <div className="absolute min-h-24 right-3 md:right-8 lg:right-12 xl:right-[55px] -bottom-28 md:-bottom-32 bg-white shadow-lg rounded-md flex flex-col">
          
         <div className="p-4 md:p-6 ">
        <p className="font-bold"> {userName}</p>
        <p>{email}</p>
          
         </div>
          <button className="py-[1px] w-fit font-bold hover:bg-[var(--bg-secondary)]" onClick={() => setProfile(false)}>Close</button>

      </div>
      }


        </div>
   
    </nav>
  );
};

export default Navbar;
