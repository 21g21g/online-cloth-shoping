import React from "react";
import logo from "./assets/logo1.jpg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { eccomerceSliceActions } from "../store/EccomerceReducer";
const NavBar = () => {
  const dispatch = useDispatch();
  const horizontal = useSelector((state) => state.eco.horizontal);
  const cartItem = useSelector((state) => state.eco.cartItem);

  const handelHorizontal = (value) => {
    dispatch(eccomerceSliceActions.setHorizontal(value));
  };
  const quantity = cartItem.reduce((total, item) => total + item.quantity, 0);
  return (
    <Nav className="navbar navbar-expand-sm  bg-body-tertiary">
      <div className="container-fluid">
        <Link>
          <img
            src={logo}
            className="navbar-brand"
            style={{ height: "30px", width: "40px" }}
          />
        </Link>

        <h1 className="navbar-brand">Shopper</h1>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row flex-column-xs justify-content-arround ml-2">
          <li className="nav-item ">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={() => handelHorizontal("shop")}
            >
              Shop
            </Link>
            {horizontal === "shop" ? (
              <hr style={{ color: "red", marginTop: "1px" }} />
            ) : (
              <></>
            )}
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/men"
              onClick={() => handelHorizontal("men")}
            >
              Men
            </Link>
            {horizontal === "men" ? (
              <hr style={{ color: "red", marginTop: "1px" }} />
            ) : (
              <></>
            )}
          </li>
          <li className="nav-item">
            <Link
              className="nav-link "
              to="/women"
              onClick={() => handelHorizontal("women")}
            >
              Women
            </Link>
            {horizontal === "women" ? (
              <hr style={{ color: "red", marginTop: "1px" }} />
            ) : (
              <></>
            )}
          </li>
          <li className="nav-item">
            <Link
              className="nav-link "
              to="/kid"
              onClick={() => handelHorizontal("kids")}
            >
              Kids
            </Link>
            {horizontal === "kids" ? (
              <hr style={{ color: "red", marginTop: "1px" }} />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {" "}
          <li>
            <button
              style={{
                border: "1px solid",
                borderRadius: "15px",
                width: "100%",
              }}
            >
              {" "}
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </button>
          </li>
        </ul>
        <li className="nav-item">
          <Link to="/cart">
            <ShoppingCartIcon />
            <span>{quantity}</span>
          </Link>
        </li>
      </div>
    </Nav>
  );
};

export default NavBar;
