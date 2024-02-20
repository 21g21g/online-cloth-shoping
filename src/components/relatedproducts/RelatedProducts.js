import React from "react";
import { ProductData } from "../assets/ProductData";
import Item from "../item/Item";
const RelatedProducts = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="container d-felx justify-content-center align-item-center">
        <h1>Related Products</h1>
        <hr
          style={{
            backgroundColor: "aqua",
            width: "30%",
            height: "10px",
            marginLeft: "5px",
          }}
        ></hr>
      </div>
      <div className="container row">
        {ProductData.map((product, index) => {
          return (
            <div className="container col-md-3">
              {" "}
              <Item
                key={index}
                id={product.id}
                name={product.name}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
