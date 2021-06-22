import React, { useState } from "react";
import Chart from "react-google-charts";

const BarChart = () => {
  const [widht, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);
  let [bar] = useState(350);
  if (widht < 400) {
    bar = 270;
  }
  if (widht < 320) {
    bar = 250;
  }

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
          chartType="BarChart"
          className="bar_chart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "Density",
              { role: "style" },

              {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation",
              },
            ],
            ["Bots", 8.94, "#FF476B", null],
            ["Real visitors", 10.49, "#FFC507", null],
            ["Total Visitors", 19.3, "#497EFB", null],
            // DataView(true)
          ]}
          options={{
            width: bar,
            height: 300,

            bar: { groupWidth: "55%" },
            legend: { position: "none" },
            backgroundColor: "#fafafa",
            axisTitlesPosition: "out",
            hAxis: {
              minValue: 0,
            },
            vAxis: {
              textPosition: "in",
              logscale: false,
              minorGridlines: { color: "#fafafa" },
            },
            bars: "horizontal",
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </div>
    </div>
  );
};

export default BarChart;
