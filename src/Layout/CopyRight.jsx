import React from "react";
import copyright from "../Assets/Icon material-copyright.png";
import './style.css'

const CopyRight = () => {
  return (
    <div className="copy_right_container">
      <div className="copyRight_md">
        <div className="copyRight">
          <img src={copyright} alt="..." />
          <p>Copy right reserved by Ehsan 2021</p>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
