import React from "react";
import "../components/Navbar.css";
import { NavLink } from "react-router-dom";
import { CiMenuFries  } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

import img from "./images/logo.png";
import { FaInstagram ,FaFacebook,FaGoogle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "var(--secondary-color)", height: "5vh" }}
      >
        <div className="container">
        <span>
            <h6 style={{display:'inline' ,float:'start'}} ><IoIosMail  className="my-1 mx-1" color="var(--primary-color)"/>himalayas55@gmail.com</h6>
            <h6  className="navtwono">< IoCall  className="my-1 mx-1" color="var(--primary-color)"/>
            +91 9822841000</h6>   
        </span>
    <span>
        <FaGoogle className="navicons"/>
        <FaFacebook className="navicons"/>
        <FaInstagram className="navicons"/>
    </span>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg justify-content-center ">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            
          >
            <img src={img} className="logo" alt="Himalayas" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <CiMenuFries />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink
                className="nav-link text-center p-3"
                aria-current="page"
                to="/"
                style={({ isActive }) => ({
                  textUnderlineOffset: "5px",
                  textDecoration: isActive ? "underline" : "none",
                  color: "var(--secondary-color)",
                })}
              >
                <h5
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup "
                  className=" "
                >
                  Home
                </h5>
               
              </NavLink>
              
              <NavLink
                className="nav-link text-center p-3"
                aria-current="page"
                to="/about"
                style={({ isActive }) => ({
                  textUnderlineOffset: "5px",
                  textDecoration: isActive ? "underline" : "none",
                  color: "var(--secondary-color)",
                })}
              >
                <h5
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  About
                </h5>
              </NavLink>
              <NavLink
                className="nav-link text-center p-3"
                aria-current="page"
                to="/gallery"
                style={({ isActive }) => ({
                  textUnderlineOffset: "5px",
                  textDecoration: isActive ? "underline" : "none",
                  color: "var(--secondary-color)",
                })}
              >
                <h5
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  Gallery
                </h5>
              </NavLink>
              <NavLink
                className="nav-link text-center p-3"
                aria-current="page"
                to="/services"
                style={({ isActive }) => ({
                  textUnderlineOffset: "5px",
                  textDecoration: isActive ? "underline" : "none",
                  color: "var(--secondary-color)",
                })}
              >
                <h5
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  Services
                </h5>
              </NavLink>
              <NavLink
                className="nav-link text-center p-3"
                aria-current="page"
                to="/contact"
                style={({ isActive }) => ({
                  textUnderlineOffset: "5px",
                  textDecoration: isActive ? "underline" : "none",
                  color: "var(--secondary-color)",
                })}
              >
                <h5
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  Contact Us
                </h5>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
