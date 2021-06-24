import React from "react";
import { Table } from "react-bootstrap";

const TraficTable = () => {
  return (
    <div className='traffic_table_md'>
      <div>
        <div className='table_head'>
          <h3>Traffic Detail</h3>
          <p>See all</p>
        </div>
        <Table className='custom_table'  hover>
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
            <tr>
              <td>123</td>
              <td>Mac</td>
              <td>5hr</td>
              <td>Jacob</td>
              <td>WAN</td>
            </tr>
            <tr>
              <td>234</td>
              <td>PC</td>
              <td>10hr</td>
              <td>Ali</td>
              <td>LAN</td>
            </tr>
            <tr>
              <td>563</td>
              <td>Mac</td>
              <td>2hr</td>
              <td>Jacob</td>
              <td>WAN</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TraficTable;
