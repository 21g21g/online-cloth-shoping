import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="container d-flex flex-column align-item-center m-0">
      <Link to={`/product/${props.id}`}>
        <motion.img
          onClick={window.scrollTo(0, 0)}
          whileHover={{ scale: 1.1 }}
          src={props.image}
          className="container img-fluid "
          style={{
            height: "30vh",
            width: "20vw",
          }}
        />
      </Link>

      <div className="container d-flex justify-content-center align-item-center">
        {" "}
        <p>{props.name}</p>
      </div>
      <div className="container d-flex flex-row ">
        <p>{props.new_price}</p>
        <p style={{ marginLeft: "3px" }}>{props.old_price}</p>
      </div>
    </div>
  );
};

export default Item;
