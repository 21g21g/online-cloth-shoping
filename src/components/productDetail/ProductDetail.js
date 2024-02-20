import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useDispatch } from "react-redux";
import { eccomerceSliceActions } from "../../store/EccomerceReducer";
import { ProductData } from "../assets/ProductData";
const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const AddToCart = (product) => {
    dispatch(
      eccomerceSliceActions.addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        new_price: product.new_price,
        old_price: product.old_price,
      })
    );
  };
  return (
    <div className="container-fluid row gap-1 mt-5 ml-0">
      <div key={product.id} className="container col gap-3 ">
        <div className="container row-xl gap-3">
          <img
            src={product.image}
            style={{ height: "100px", width: "90px" }}
            alt="there is no image"
          />
          <img
            src={product.image}
            style={{ height: "100px", width: "90px" }}
            alt="there is no image"
          />
          <img
            src={product.image}
            style={{ height: "100px", width: "90px" }}
            alt="there is no image"
          />
          <img
            src={product.image}
            style={{ height: "100px", width: "90px" }}
            alt="there is no image"
          />
          <img
            src={product.image}
            style={{ height: "100px", width: "90px" }}
            alt="there is no image"
          />
        </div>
      </div>
      <div className="container col-sm">
        <img
          src={product.image}
          style={{ height: "250px", width: "150px" }}
          className="img-fluid"
          alt="there is no image"
        />
      </div>
      <div className="container col ">
        <div className="container d-flex justify-content-center">
          <h1>{product.name}</h1>
        </div>

        <div className="container d-flex flex-row justify-content-center">
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />

          <p>(123)</p>
        </div>

        <div className="container d-flex justify-content-center flex-row gap-2">
          <p>${product.old_price}</p> <p>${product.new_price}</p>
        </div>

        <h1>Select Size</h1>
        <div className="container gap-2 d-flex flex-row">
          {" "}
          <div>sm</div>
          <div>md</div>
          <div>xl</div>
          <div>xxl</div>
        </div>

        <button onClick={() => AddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
