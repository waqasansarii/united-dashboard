import React from 'react'
// assets 
import purple from '../../Assets/Group 119.png'
import cyan from '../../Assets/Group 120.png'
import orange from '../../Assets/Group 121.png'

const StaticCard = () => {
    return (
        <div className='static_card_conatainer'>
            <div className="statistics_card_md">
                <div className="statistics_card purple">
                   <div className="cardImg">
                       <img src={purple} alt="..." />
                   </div>
                   <div className="card_body_t">
                       <p>Transactions</p>
                       <h5>424,556,854</h5>
                   </div>
                </div>
                <div className="statistics_card cyan">
                   <div className="cardImg">
                       <img src={cyan} alt="..." />
                   </div>
                   <div className="card_body_t">
                       <p>Transactions</p>
                       <h5>424,556,854</h5>
                   </div>
                </div>
                <div className="statistics_card orange">
                   <div className="cardImg">
                       <img src={orange} alt="..." />
                   </div>
                   <div className="card_body_t">
                       <p>Transactions</p>
                       <h5>424,556,854</h5>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default StaticCard
