import React from "react";

import bannerb from "../assets/mel1.jpg";
import bannerg from "../assets/fem4.jpg";
import bannerk from "../assets/kid1.jpg";
const CoverBanner = ({ category }) => {
  console.log(category);
  return (
    <div className="container d-flex flex-row align-item-center m-4 p-5 bg-secondary">
      <div className="container d-flex flex-column">
        <h1 style={{ color: "red" }}>FLAT 50% OFF</h1>
        <h2>12 Hours 20 Minutes</h2>
        <button className="btn btn-danger" style={{ width: "40%" }}>
          explore now
        </button>
      </div>
      <div className="container justify-content-center align-item-center">
        {category === "men" && <img src={bannerb} />}
        {category === "female" && <img src={bannerg} />}
        {category === "kid" && <img src={bannerk} />}
      </div>
    </div>
  );
};

export default CoverBanner;
