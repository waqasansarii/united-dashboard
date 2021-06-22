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
        <Chart
          width={"300px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "Density",
              { role: "style" },
              
                { calc: "stringify",
                  sourceColumn: 1,
                  type: "string",
                  role: "annotation" },
            ],
            ["Bots", 8.94, "#FF476B",null],
            ["Real visitors", 10.49, "#FFC507",null],
            ["Total Visitors", 19.3, "#497EFB",null],
            // DataView(true)
          ]}
          options={{
            width: 350,
            height: 300,
            bar: { groupWidth: "55%" },
            legend: { position: "none" },
            backgroundColor:'#fafafa',
            axisTitlesPosition:'out',
            hAxis: {
              minValue: 0,
            },
            vAxis:{textPosition:'in', logscale: false,minorGridlines:{color:'#fafafa'} },
            bars: 'horizontal',
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </div>
    </div>
  );
};

export default BarChart;
