import React from "react";
import "./Style/map.css";

const Marker = ({ lat, lng, id }) => {
  return (
    <div>
      <div
        key={id}
      />
      <div className="user_name">username</div>
      {/* <img style={{width:50}} src="https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png" alt="" /> */}
    </div>
  );
};

export default Marker;
