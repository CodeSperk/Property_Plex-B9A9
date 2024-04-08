import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { BsMenuUp } from "react-icons/bs";
import Button1 from "../../Buttons/Button1";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2';
import 'animate.css';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  


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
  const userPhoto = user?.photoURL
    ? user.photoURL
    : "https://i.ibb.co/kg3gz62/c0749b7cc401421662ae901ec8f9f660-removebg-preview.png";

  return (
    <nav className="z-20 bg-[var(--bg-primary)] py-4 shadow-sm fixed w-full">
      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] navbar flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl mb-2 border-2 p-1 border-[var(--clr-accent)] bg-[var(--clr-accent)] rounded text-white hover:text-[var(--clr-accent)] hover:bg-transparent"
            >
              <BsMenuUp />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-4 py-6 shadow bg-[var(--bg-primary)] rounded-box w-52"
            >
              {menuLists}
            </ul>
          </div>

          <Link to="/" className="text-[var(--clr-accent)] font-semibold">
            <h3>PropertyPlex</h3>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLists}</ul>
        </div>

        {user ? (
          <div className="flex gap-3 items-center">
            <div className="tooltip tooltip-left" data-tip={userName}>
              <div className="w-11 h-11 border-2 border-[var(--clr-accent)] rounded-full hover:cursor-pointer">
                <img
                  src={userPhoto}
                  alt="User Photo"
                  className="rounded-full h-full"
                />
              </div>
            </div>
            <Button1 btnLink={logoutBtnLink}></Button1>
          </div>
        ) : (
          <Button1 btnLink={loginBtnLink}></Button1>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
