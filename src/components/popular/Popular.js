import React from "react";
import { PopularData } from "../assets/FemalePopular";
import Item from "../item/Item";
const Popular = () => {
  return (
    <div className="container">
      <div className="container d-flex flex-column justify-content-center align-item-center">
        {" "}
        <h1>Popular in Women</h1>
        <hr
          style={{
            backgroundColor: "aqua",
            width: "30%",
            height: "10px",
            marginLeft: "5px",
          }}
        ></hr>{" "}
      </div>
      <div className="container d-flex flex-row align-item-center mt-3">
        {PopularData.map((popular, index) => {
          return (
            <Item
              key={index}
              id={popular.id}
              name={popular.name}
              image={popular.image}
              new_price={popular.new_price}
              old_price={popular.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
