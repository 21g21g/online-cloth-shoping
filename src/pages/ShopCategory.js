import React from "react";
import CoverBanner from "../components/coverBanner/CoverBanner";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Item from "../components/item/Item";
const ShopCategory = ({ category, containCatagory }) => {
  console.log(category);
  return (
    <div className="d-flex flex-column">
      <CoverBanner category={category} />
      <div className="container row">
        <div className="container d-flex flex-row justify-content-between">
          <p>
            <span>Showing 1-12</span>out of 36 products
          </p>
          <button style={{ border: "1px solid", borderRadius: "30px" }}>
            sort by
            <ArrowDropDownIcon />
          </button>
        </div>
        {containCatagory.map((product, index) => {
          return (
            <div className="container col-md-3 m-4">
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
      <div className="container d-flex justify-content-center align-item-center p-4">
        <button>explore more</button>
      </div>
    </div>
  );
};

export default ShopCategory;
