import React from "react";
import { Link, useLocation } from "react-router-dom";
import navlogo from "../assets/img/logo.png";
import avata from "../assets/img/avata.png";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation(); 

  
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-lg text-black font-bold border-b-2 border-black mr-2"
      : "text-lg text-[#71717A] mr-2";
  };

  const links = (
    <>
      <Link className={getLinkClass("/")} to="/">
        Home
      </Link> 
      <Link className={getLinkClass("/incidents")} to="/incidents">
        Incidents
      </Link>
      <Link className={getLinkClass("/locations")} to="/locations">
        Location
      </Link>
      <Link className={getLinkClass("/activites")} to="/activites">
        Activities
      </Link>
      <Link className={getLinkClass("/document")} to="/document">
        Documents
      </Link>
      <Link className={getLinkClass("/cypher")} to="/cypher">
        Cypher Ai
      </Link>
    </>
  );

  return (
    <div className="bg-[#E4E4E7]">
      <div className="navbar  items-center pb-5 w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {
            <Link to="/">
              <img className="h-8 " src={navlogo} alt="" />
            </Link>
          }
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="text-3xl bg-white h-10 flex items-center justify-center w-10 rounded-full mr-3">
            <IoIosNotifications />
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
              <img src={avata} />
            </div>
          </div>
          <div className="px-2">
            <h4 className="font-semibold">Usman Zafar</h4>
            <p>usmanzafar@gmail.com</p>
          </div>
        </div>
      </div>
      {/* top navBar style here */}
      <section className="w-11/12 mx-auto">
        <div className="flex justify-between pb-4">
          <div>
            <p>Welcome back</p>
            <h3 className="text-4xl font-semibold">Dashboard</h3>
          </div>
          <div className="flex items-center gap-4">
     
      <div className=" bg-white flex items-center border border-gray-300 rounded-md px-3 py-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"

          placeholder="Search incident"
          className="outline-none bg-transparent text-gray-700 w-full bg-white"
        />
      </div>

      
      <div className="bg-white flex items-center border border-gray-300 rounded-md px-3 py-2">
      <input type="text" placeholder="Sort By: Date modified" className="outline-none bg-transparent text-gray-700 w-full bg-white" />
      </div>

      {/* Button */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
        Cypher AI
      </button>
    </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
