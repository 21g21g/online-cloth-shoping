import React from "react";
import tam from "../assets/tam.webp";
const Offer = () => {
  return (
    <div
      className="container d-flex flex-row justify-content-between m-5 bg-secondary "
      style={{ width: "95%" }}
    >
      <div className="container d-flex flex-column m-1 justify-content-center align-item-center">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Only On Best Sellers products</p>
        <button className="btn btn-danger" style={{ width: "50%" }}>
          Check now
        </button>
      </div>
      <div className="container justify-content-center align-item-center">
        <img src={tam} className="img-fluid" />
      </div>
    </div>
  );
};

export default Offer;
