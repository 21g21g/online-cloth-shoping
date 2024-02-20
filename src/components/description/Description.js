import React from "react";

const Description = () => {
  return (
    <div className="container d-flex flex-column mt-5">
      <div className="container d-flex flex-row gap-1">
        <h4 style={{ border: "1px solid" }}>Description</h4>
        <h4 style={{ border: "1px solid" }}>
          Reviews<span>(123)</span>
        </h4>
      </div>
      <p>
        An e-commerce website is a platform that enables businesses to sell
        products or services online to customers. It facilitates the entire
        process of buying and selling goods or services over the internet.
        Here's a clear description of an e-commerce website:Overall, an
        e-commerce website serves as a digital marketplace where businesses can
        reach a global audience, and customers can conveniently shop for
        products or services from the comfort of their homes.
      </p>
    </div>
  );
};

export default Description;
