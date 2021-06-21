import React from "react";
import Chart from "react-google-charts";
const PieChart = () => {
  return (
    <div className="chart_analytics_container">
      <div className="chart_analytic_md">
        {/* total country chart  */}
        <div className="analytic_chart_div">
          <div className="chart_card_head">
            <h5>Total Countries</h5>
          </div>
          <div>
            <Chart
              className="pie_chart"
              width={"200px"}
              height={"200px"}
              chartType="PieChart"
              style={{ margin: "0px auto" }}
              //   loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 4],
                ["Commute", 6],
              ]}
              options={{
                pieHole: 0.5,
                legend: "none",
                //   pieSliceText: 'label',
                pieStartAngle: 100,
                backgroundColor: "#fafafa",
                slices: {
                  0: { color: "#0CB868" },
                  1: { color: "#FB8549" },
                  2: { color: "black" },
                },
              }}
              rootProps={{ "data-testid": "3" }}
            />
          </div>
          <div className="legends">
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#0CB868",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>USA</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#FB8549",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Europe</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "black",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Others</p>
            </div>
          </div>
        </div>
        {/* total visitors  */}
        <div className="analytic_chart_div">
          <div className="chart_card_head">
            <h5>Total Visitors</h5>
          </div>
          <div>
            <Chart
              className="pie_chart"
              width={"200px"}
              height={"200px"}
              chartType="PieChart"
              style={{ margin: "0px auto" }}
              //   loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 4],
                ["Commute", 6],
              ]}
              options={{
                pieHole: 0.5,
                legend: "none",
                //   pieSliceText: 'label',
                pieStartAngle: 100,
                backgroundColor: "#fafafa",
                slices: {
                  0: { color: "#497EFB" },
                  1: { color: "#FFC507" },
                  2: { color: "#FF476B" },
                },
              }}
              rootProps={{ "data-testid": "3" }}
            />
          </div>
          <div className="legends">
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#497EFB",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Bots</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#FFC507",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Real</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#FF476B",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Fake</p>
            </div>
          </div>
        </div>
        {/* data tranmited  */}
        <div className="analytic_chart_div">
          <div className="chart_card_head">
            <h5>Data Transmitted</h5>
          </div>
          <div>
            <Chart
              className="pie_chart"
              width={"200px"}
              height={"200px"}
              chartType="PieChart"
              style={{ margin: "0px auto" }}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 4],
              ]}
              options={{
                pieHole: 0.5,
                legend: "none",
                pieStartAngle: 100,
                backgroundColor: "#fafafa",
                slices: {
                  0: { color: "#497EFB" },
                  1: { color: "#FFC507" },
                },
              }}
              rootProps={{ "data-testid": "3" }}
            />
          </div>
          <div className="legends two_legend">
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#497EFB",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Download</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#FFC507",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Upload</p>
            </div>
          </div>
        </div>
        {/* total Devices  */}
        <div className="analytic_chart_div">
          <div className="chart_card_head">
            <h5>Total Devices</h5>
          </div>
          <div>
            <Chart
              className="pie_chart"
              width={"200px"}
              height={"200px"}
              chartType="PieChart"
              style={{ margin: "0px auto" }}
              //   loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 4],
                ["Commute", 6],
              ]}
              options={{
                pieHole: 0.5,
                legend: "none",
                //   pieSliceText: 'label',
                pieStartAngle: 100,
                backgroundColor: "#fafafa",
                slices: {
                  0: { color: "#0AB47A" },
                  1: { color: "#EDF0F6" },
                  2: { color: "#FF476B" },
                },
              }}
              rootProps={{ "data-testid": "3" }}
            />
          </div>
          <div className="legends">
            <div className="legend">
              <p
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                  backgroundColor: "#EDF0F6",
                }}
              ></p>
              <p>Desktop</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#0AB47A",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Laptop</p>
            </div>
            <div className="legend">
              <p
                style={{
                  backgroundColor: "#FF476B",
                  width: "7px",
                  height: "7px",
                  borderRadius: 20,
                }}
              ></p>
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;