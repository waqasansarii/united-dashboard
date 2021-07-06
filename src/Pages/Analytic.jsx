import React from "react";
import BarChart from "../Components/AnalyticComp/BarChart";
import PieChart from "../Components/AnalyticComp/PieChart";
import AnalyticTable from "../Components/AnalyticComp/table";
import Visitors from "../Components/AnalyticComp/Visitors";
import { analyticTableData } from "./Data/AnalyticTableData";
import SimpleMap from "../Components/Map";
import CopyRight from "../Layout/CopyRight";
import "./style/analytic.css";

const Analytic = () => {
  return (
    <React.Fragment>
      <div className="analytic_container">
        <div className="main_head">
          <h2>Analytics</h2>
        </div>
        <div className="analytic_piechart">
          <PieChart />
        </div>
        <div className="anayltic_table_md">
          <AnalyticTable head="Frequent User" data={analyticTableData} />
          <AnalyticTable head="Frequent Bots" data={analyticTableData} />
          <AnalyticTable head="Transmitted User" data={analyticTableData} />
        </div>
        <div className="visitors_container">
          <div className="visitors_list">
            <Visitors />
            <BarChart />
          </div>
          <div className="analytic_map_container">
            <SimpleMap className="analytic_google_map" />
          </div>
          {/* mob view copy right   */}
          <div className="mob_view_copy">
            <CopyRight />
          </div>
        </div>
      </div>
      {/* desktop view copy right  */}
      <div className="copy_right_cont">
        <CopyRight />
      </div>
    </React.Fragment>
  );
};

export default Analytic;
