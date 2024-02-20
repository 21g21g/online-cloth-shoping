import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { eccomerceSliceActions } from "../../store/EccomerceReducer";

const CartItem = () => {
  const cartItem = useSelector((state) => state.eco.cartItem);
  //   const total = useSelector((state) => state.eco.total);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(eccomerceSliceActions.removeCart(id));
  };
  return (
    <>
      {" "}
      <div className="container-fluid">
        {cartItem.map((cart) => {
          return (
            <>
              {" "}
              <div className="container-fluid d-flex gap-4 justify-content-between">
                <img
                  style={{ width: "30px" }}
                  src={cart.image}
                  className="img-fluid"
                />
                <p>{cart.name}</p>
                <p>{cart.new_price}</p>
                <p>{cart.quantity}</p>
                <p>{cart.total}</p>

                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => removeProduct(cart.id)}
                />
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
