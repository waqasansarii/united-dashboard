import React from 'react'
import visitor from '../../Assets/Group 289.png'
import usa from '../../Assets/Mask Group 1.png'
import uk from '../../Assets/197374.png'
import fr from '../../Assets/197560.png'
import pak from '../../Assets/197606.png'
import ind from '../../Assets/197419.png'
import other from '../../Assets/197615.png'

const Visitors = () => {
    return (
        <div className='visitor_container'>
            <div className="visitor_md">
                <div className="visitor_head">
                    <div className="visitor_img">
                        <img src={visitor} alt="..." />
                        <h5>Visitors</h5>
                    </div>
                    <div className="visitor_percent">
                        <p>Monthly</p>
                        <h5>82%</h5>
                    </div>
                </div>
                <div>
                    <ul className="visitor_ul">
                        <li>
                            <div className="visitorName">
                                <img src={usa} alt="..." />
                                <p>United State</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                        <li>
                            <div className="visitorName">
                                <img src={uk} alt="..." />
                                <p>United Kingdom</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                        <li>
                            <div className="visitorName">
                                <img src={fr} alt="..." />
                                <p>France</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                        <li>
                            <div className="visitorName">
                                <img src={pak} alt="..." />
                                <p>Pakistan</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                        <li>
                            <div className="visitorName">
                                <img src={ind} alt="..." />
                                <p>India</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                        <li>
                            <div className="visitorName">
                                <img src={other} alt="..." />
                                <p>Others</p>
                            </div>
                            <p>068-243-589</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Visitors
