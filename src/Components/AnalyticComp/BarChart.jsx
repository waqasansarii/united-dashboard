import React from "react";
import Chart from "react-google-charts";

const BarChart = () => {
  return (
    <div className="analysis_bar_chart_container">
      <div className="analysis_barChart_md">
        <div className="visitor_head">
          <div className="visitor_img">
            <h5>Analysis</h5>
          </div>
          <div className="visitor_percent">
            <p>Monthly</p>
            <h5>20TB</h5>
          </div>
        </div>
        {/* <Chart
          width={"300px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "Density",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
              },
            ],
            ["Copper", 8.94, "#b87333", null],
            ["Silver", 10.49, "silver", null],
            ["Gold", 19.3, "gold", null],
          ]}
          options={{
            width: 400,
            height: 240,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
            backgroundColor:'#fafafa'
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        /> */}
      </div>
    </div>
  );
};

export default BarChart;
