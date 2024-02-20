import React from "react";
import logo from "../assets/logo1.jpg";
import { FaSurprise } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

import { FaCompactDisc } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-item-center m-4">
      <div className="container d-flex flex-row justify-content-center align-item-center ml-3">
        <img
          src={logo}
          alt="there is no image in here"
          className="img-fluid"
          style={{ height: "20px", width: "50px" }}
        />
        <h1 style={{ marginLeft: "2px" }}>SHOPPER</h1>
      </div>
      <ul
        className="container d-flex flex-row justify-content-center align-item-center"
        style={{ listStyle: "none" }}
      >
        <li>product</li>
        <li style={{ marginLeft: "4px" }}>company</li>
        <li style={{ marginLeft: "4px" }}>office</li>
        <li style={{ marginLeft: "4px" }}>about</li>
        <li style={{ marginLeft: "4px" }}>contact</li>
      </ul>
      <div className="container d-flex flex-row justify-content-center align-item-center">
        <FaSurprise />
        <FaSpotify style={{ marginLeft: "6px" }} />
        <FaCompactDisc style={{ marginLeft: "6px" }} />
      </div>
      <hr></hr>
      <div className="container d-flex justify-content-center align-item-center">
        <p>Copyright@2023-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
