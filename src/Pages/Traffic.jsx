import React from "react";
import SimpleMap from "../Components/Map";
import TraficTable from "../Components/TraficComp/TraficTable";
import StaticCard from "../Components/TraficComp/staticCard";
import "./style/trafic.css";
// assets
import next from "../Assets/Icon material-navigate-next.png";
const Traffic = () => {
  return (
    <div className="trafic_container">
      <div className="trafic_left_content">
        <div className="statistics_div">
          <div className="gnrl_head">
            <h4>General Statistics</h4>
          </div>
          <div className="alluser">
            <h5>All Users</h5>
            <img src={next} alt="" />
          </div>
          <div className="number_ofUser">
            <h1>834,646,864</h1>
          </div>
        </div>
        <TraficTable />
        <StaticCard />
      </div>
      <div className="trafic_right_map">
        <SimpleMap className='google_map_md' />
      </div>
      
    </div>
  );
};

export default Traffic;
