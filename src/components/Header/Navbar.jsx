import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <Link to="/">
        <li className="mr-7">Home</li>
      </Link>
      <Link to="/apps">
        <li className="mr-7">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="mr-7">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl">
            <img className="w-[40px]" src="/logo.png" alt="" />
            HERO.IO
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/SadmanWebDev"
          className="btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <FontAwesomeIcon icon={faGithub} />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
