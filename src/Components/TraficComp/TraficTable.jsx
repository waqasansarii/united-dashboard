import React from "react";
import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

const data = [
  {
    ip: "123",
    os: "Mac",
    time: "5hr",
    useragent: "Jacob",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "Mac",
    time: "5hr",
    useragent: "Jacob",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "Mac",
    time: "5hr",
    useragent: "Jacob",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "Mac",
    time: "5hr",
    useragent: "Jacob",
    type: "Real",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Bot",
  },
  {
    ip: "123",
    os: "Mac",
    time: "5hr",
    useragent: "Jacob",
    type: "Real",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Bot",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Real",
  },
  {
    ip: "123",
    os: "PC",
    time: "2hr",
    useragent: "Ali",
    type: "Bot",
  },
];

const TraficTable = () => {
  return (
    <div className="traffic_table_md">
      <div>
        <div className="table_head">
          <h3>Traffic Stream</h3>
          <p>See all</p>
        </div>
        <div className="trafic_table_sd">
          <Table className="custom_table" hover>
            <thead>
              <tr>
                <th>IP</th>
                <th>OS</th>
                <th>Time</th>
                <th>Useragent</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => (
                <tr
                  key={i}
                  onClick={() => alert("clicked")}
                  className={val.type==='Bot'?'red':'lightBlue'}
                >
                  <td> {val.ip}</td>
                  <td>{val.os}</td>
                  <td>{val.time}</td>
                  <td>{val.useragent}</td>
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

export default TraficTable;
