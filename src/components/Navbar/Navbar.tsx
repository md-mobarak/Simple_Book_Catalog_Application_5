import { useState } from "react";
// import "../../App.css";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileNavbarToggle, setMobileNavbarToggle] = useState(false);
  return (
    <header className="relative">
      <div className="flex justify-between  backdrop-blur-sm static top-0 glass items-center shadow-lg lg:h-12 h-10 w-full lg:px-10 px-5 lg:py-10 py-7 text-stone-900 bg-white">
        <section>
          <h1 className="lg:text-xl text-lg">
            <Link to="/" key={pathname}>
              LOGO
            </Link>
          </h1>
        </section>
        <section className="hidden lg:block">
          <ul className="flex justify-evenly items-center space-x-12">
            <li
              className={
                pathname === "/"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link to="/" key={pathname}>
                HOME
              </Link>
            </li>
            <li
              className={
                pathname === "/all-book"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link to="/all-book" key={pathname}>
                ALL BOOK
              </Link>
            </li>
            <li
              className={
                pathname === "/shop"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link to="/" key={pathname}>
                SHOP
              </Link>
            </li>
            <li
              className={
                pathname === "/about"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link to="/" key={pathname}>
                ABOUT
              </Link>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link to="/" key={pathname}>
                CONTACT
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex justify-center items-center">
            <li className="lg:font-bold hidden lg:block font-semibold">
              <Link to="/login" key={pathname}>
                LOGIN
              </Link>
            </li>
            <li className="lg:font-bold lg:hidden ml-1 font-semibold ">
              <button
                onClick={() => setMobileNavbarToggle(!mobileNavbarToggle)}
              >
                {!mobileNavbarToggle ? (
                  <svg
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="text-primary"
                    width="24"
                    height="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
                  </svg>
                ) : (
                  <RxCross2
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    className="text-primary font-semibold text-2xl"
                  ></RxCross2>
                )}
              </button>
            </li>
          </ul>
        </section>
      </div>
      {mobileNavbarToggle && (
        <section
          className="block lg:hidden relative"
          data-aos={`${!mobileNavbarToggle ? "fade-up" : "fade-down"} `}
          data-aos-duration="2000"
        >
          <ul className="navbar-ul absolute top-0 w-full bg-base-200 text-center text-primary ">
            <li className="font-semibold ">
              <Link to="/" key={pathname}>
                HOME
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/" key={pathname}>
                ABOUT
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/all-book" key={pathname}>
                ALL BOOK
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/" key={pathname}>
                SHOP
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/" key={pathname}>
                CONTACT
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/login" key={pathname}>
                LOGIN
              </Link>
            </li>
          </ul>
        </section>
      )}
    </header>
  );
};

export default Navbar;
