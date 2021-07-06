import React from "react";
import SimpleMap from "../Components/Map";
import TraficTable from "../Components/TraficComp/TraficTable";
import StaticCard from "../Components/TraficComp/staticCard";
import CopyRight from "../Layout/CopyRight";
import "./style/trafic.css";
// assets
// import next from "../Assets/Icon material-navigate-next.png";
const Traffic = () => {
  return (
    <React.Fragment>
      <div className="trafic_container">
        <div className="trafic_left_content">
          {/* <div className="statistics_div">
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
          </div> */}
          <TraficTable />
        </div>
        <div className="trafic_right_map">
          {/* <div className="overall_users">
            <div className="users">
              <p>Total users</p>
              <h5>257,5840</h5>
            </div>
            <div className="users">
              <p>Unique</p>
              <h5>257,5840</h5>
            </div>
            <div className="users">
              <p>New users</p>
              <h5>257,5840</h5>
            </div>
            <div className="users">
              <p>Usage</p>
              <h5>257,5840</h5>
            </div>
          </div> */}
          {/* data tiny three cards  */}
          <div className="statistic_card_">
            <StaticCard />
          </div>
          <SimpleMap className="google_map_md" />
        </div>
      </div>
      <div className="copyR_tr_md">
        <CopyRight />
      </div>
    </React.Fragment>
  );
};

export default Traffic;
