import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { eccomerceSliceActions } from "../store/EccomerceReducer";

const LoginSignup = () => {
  const login = useSelector((state) => state.eco.login);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleLoginTrue = () => {
    dispatch(eccomerceSliceActions.setLogin());
  };
  const handleChange = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div
      className="container d-flex flex-column justify-content-center align-item-center bg-secondary p-5 "
      style={{ width: "50%", marginTop: "80px" }}
    >
      <div className="container d-flex justify-content-center align-item-center">
        {" "}
        {login ? <h1>Login</h1> : <h1>Sign Up</h1>}
      </div>
      {login ? (
        <form className="form-group p-4 ">
          <input
            className="form-control form-control-sm mb-2"
            type="email"
            name="email"
            placeholder="enter email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="form-control form-control-sm mb-2"
            type="password"
            name="password"
            placeholder="enter password"
            value={user.password}
            onChange={handleChange}
          />
          <div className="container d-flex justify-content-center align-item-center">
            {" "}
            <button className="container btn btn-danger">continue</button>
          </div>
          <div className="container d-flex justify-content-center align-item-center">
            <p>
              Create an account?
              <span>
                <Link
                  onClick={handleLoginTrue}
                  className="text-decoration-none color-danger"
                >
                  Cleak here
                </Link>
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form className="form-group p-4 ">
          <input
            className="form-control form-control-sm mb-2"
            type="text"
            name="name"
            placeholder="user name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            className="form-control form-control-sm mb-2"
            type="email"
            name="email"
            placeholder="enter email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="form-control form-control-sm mb-2"
            type="password"
            name="password"
            placeholder="enter password"
            value={user.password}
            onChange={handleChange}
          />
          <div className="container d-flex justify-content-center align-item-center">
            {" "}
            <button className="container btn btn-danger">continue</button>
          </div>
          <div className="container d-flex justify-content-center align-item-center">
            <p>
              Already have an account?
              <span>
                <Link
                  onClick={handleLoginTrue}
                  className="text-decoration-none color-danger"
                >
                  Login here
                </Link>
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
export default LoginSignup;
