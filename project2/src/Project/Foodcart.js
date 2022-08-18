import React from "react";
import "./Foodcart.css";


const Foodcart = (data) => {
  return (
    <div>
      <div className="food">
        <img src={data.images} />

        <h2>{data.name}</h2>
        <p>
          Note: to improve web accessibility, we recommend using
          aria-hidden="true" to hide icons used purely for decoration. Note: to
          improve web accessibility, we recommend using aria-hidden="true" to
          hide icons used purely for decoration.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span
              style={{ fontSize: "20px", marginLeft: "10px", color: "gray" }}
            >
              <i className="fa fa-heart"></i>
            </span>
            <span
              style={{ fontSize: "20px", marginLeft: "10px", color: "gray" }}
            >
              <i className="fa fa-share-alt"></i>
            </span>
          </div>
          <div>
            <span
              style={{ fontSize: "20px", marginRight: "10px", color: "gray" }}
            >
              <i className="fa fa-shopping-cart"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcart;
