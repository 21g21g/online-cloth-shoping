import React from "react";

import aba from "../assets/photo-1617922001439-4a2e6562f328.avif";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="container-fluid d-flex flex-row justify-content-between p-15 mt-3"
      //   style={{ backgroundColor: "aqua" }}
    >
      <div className="container d-flex flex-column justify-content-center align-item-center">
        <h3>New Arrivals Only</h3>
        <h1>New</h1>
        <h1>Collections</h1>
        <h1>For everyone</h1>
        <Link to="/">
          <button className="btn btn-danger">Latest Collections</button>
        </Link>
      </div>
      <div className="container-fluid d-flex justify-content-center align-item-center">
        <img
          src={aba}
          className="img-fluid fill"
          alt="there is no image"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Banner;
