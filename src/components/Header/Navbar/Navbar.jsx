import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

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

  return (
    <nav className="bg-[var(--bg-primary)] py-4">
      <div className="navbar flex justify-between">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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

          <button className="py-1.5 px-4 md:px-5 bg-[var(--clr-accent)] border-2 border-transparent hover:bg-[var(--bg-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] text-white font-semibold rounded tracking-wider">
            <Link>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
