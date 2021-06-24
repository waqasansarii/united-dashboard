import React from "react";
import "./Style/map.css";

const Marker = ({ lat, lng, id, users, img, name }) => {
  return (
    <div>
      {name ? (
        <div key={id}>
          <div className="user_name">
            <img src={img} alt="" />
            <div className="marker_name">
              <p>{name}</p>
              <p className="users_num">{users}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Marker;
