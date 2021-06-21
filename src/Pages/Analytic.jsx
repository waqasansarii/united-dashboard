import React from 'react'
import BarChart from '../Components/AnalyticComp/BarChart'
import PieChart from '../Components/AnalyticComp/PieChart'
import AnalyticTable from '../Components/AnalyticComp/table'
import Visitors from '../Components/AnalyticComp/Visitors'
import SimpleMap from '../Components/Map'
import TraficTable from '../Components/TraficComp/TraficTable'
import './style/analytic.css'

const Analytic = () => {
    return (
        <div className='analytic_container'>
            <div className="main_head">
                <h2>Analytics</h2>
            </div>
            <div className="analytic_piechart">
                <PieChart />
            </div>
            <div className="anayltic_table_md">
                <AnalyticTable head='Frequent User' />
                <AnalyticTable head='Frequent Bots' />
                <AnalyticTable head='Transmitted User' />
            </div>
            <div className="visitors_container">
                <Visitors />
                <BarChart />
                <SimpleMap className='analytic_google_map' />
            </div>
            {/* <div className="trafic_left_content">
              <TraficTable />
            </div>
            <div className="trafic_right_map">
             <SimpleMap />
            </div> */}
        </div>
    )
}

export default Analytic
