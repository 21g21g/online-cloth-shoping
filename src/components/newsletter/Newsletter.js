import React from "react";

const Newsletter = () => {
  return (
    <div className="container bg-secondary d-flex flex-column p-5">
      <h1 className="container d-flex jutify-content-center align-item-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="container d-flex jutify-content-center align-item-center">
        subscribes to our newsletter and stay updated
      </p>
      <div className="container form-group d-flex flex-row">
        <input
          type="email"
          placeholder="your emailId"
          className="form-control"
        />
        <button className="btn btn-dark text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
