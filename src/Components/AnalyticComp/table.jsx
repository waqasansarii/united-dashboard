import React from "react";
import { Table } from "react-bootstrap";

const AnalyticTable = ({ head, data }) => {
  return (
    <div className="analytic_table_conatainer">
      <div>
        <div className="table_analytic_head">
          <h3>{head}</h3>
          <p>See all</p>
        </div>
        <div className="analytic_table_sd">
          <Table className="custom_analytic_table" hover>
            <thead>
              <tr>
                <th>IP</th>
                <th>Location</th>
                <th>OS</th>
                <th>Time</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => (
                <tr>
                  <td>{val.ip}</td>
                  <td>{val.location}</td>
                  <td>
                    <span
                      className={val.os}
                    >
                      {" "}
                      {val.os}
                    </span>
                  </td>
                  <td className="time_date">
                    <span> {val.date}</span>
                    <span> {val.time} </span>
                  </td>
                  <td>{val.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticTable;
