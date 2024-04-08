import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { BsMenuUp } from "react-icons/bs";
import Button1 from "../../Buttons/Button1";

const Navbar = () => {
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


  const loginBtnLink = <>
    <Link to="/login">Login</Link>
  </>;

  return (
    <nav className="bg-[var(--bg-primary)] py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 xl:px-[55px] navbar flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-2xl mb-2 border-2 p-1 border-[var(--clr-accent)] bg-[var(--clr-accent)] rounded text-white hover:text-[var(--clr-accent)] hover:bg-transparent">
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

        <div className="flex gap-3 items-center">

          <div className="tooltip tooltip-left" data-tip="Mahbubur Rahman">
            <div className="w-11 h-11 border-2 border-[var(--clr-accent)] rounded-full hover:cursor-pointer">
              <img
                src="https://i.ibb.co/kg3gz62/c0749b7cc401421662ae901ec8f9f660-removebg-preview.png"
                alt=""
                className="rounded-full h-full"
              />
            </div>
          </div>
          <Button1 btnLink={loginBtnLink}></Button1>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
