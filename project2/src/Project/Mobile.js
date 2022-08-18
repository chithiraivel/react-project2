import React from "react";
const Mobile = () => {
  return (
    <div>
      <div className="one">
        <div className="firstImg">
          <img src={require("../Assets/react.png")} className="image"/>
        </div>

        <div style={{position:'relative'}}>
            <span  className="input-box">
            <input type={"search"} placeholder={"Search"} /></span>

            <span className="icon1">
              <i className="fa fa-search "></i>
            </span>
            <span className="icon2">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className='icon3'>
              C
            </span>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
