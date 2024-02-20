import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProductBar = ({ comingProduct }) => {
  return (
    <div className="container-fluid d-flex flex-row mt-3">
      HOme
      <KeyboardArrowRightIcon />
      SHOP
      <KeyboardArrowRightIcon />
      {comingProduct.category}
      <KeyboardArrowRightIcon />
      {comingProduct.name}
    </div>
  );
};

export default ProductBar;
