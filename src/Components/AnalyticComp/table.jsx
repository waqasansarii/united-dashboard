import React from "react";
import { Table } from "react-bootstrap";

const AnalyticTable = ({head}) => {
  return (
    <div className='analytic_table_conatainer'>
      <div>
        <div className="table_analytic_head">
          <h3>{head}</h3>
          <p>See all</p>
        </div>
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
            <tr>
              <td>123-3322</td>
              <td>US,Texas</td>
              <td  ><span className='laptop'> Laptop</span></td>
              <td>6/6/2021 20:12 <span className='pm'>PM</span></td>
              <td>WAN</td>
            </tr>
            <tr>
              <td>234-6425</td>
              <td>UAE,dubai</td>
              <td > <span className='mobile'> Mobile</span></td>
              <td>6/6/2021 20:12 <span className='am'>AM</span></td>
              <td>LAN</td>
            </tr>
            <tr>
              <td>563-5922</td>
              <td>US,Texas</td>
              <td><span className='tablet'> Tablet</span></td>
              <td>6/6/2021 20:12 <span className='pm'>PM</span></td>
              <td>WAN</td>
            </tr>
            <tr>
              <td>563-5922</td>
              <td>US,Texas</td>
              <td ><span className='desktop'> Desktop</span></td>
              <td>6/6/2021 20:12 <span className='pm'>PM</span></td>
              <td>WAN</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AnalyticTable;
