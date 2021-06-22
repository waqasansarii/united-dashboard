import React from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Analytic from '../Pages/Analytic'
import NavbarMain from '../Layout/Navbar'
import Traffic from '../Pages/Traffic'
import CopyRight from '../Layout/CopyRight'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavbarMain />
                <Switch>
                    <Route exact path='/' component={Traffic} />
                    <Route exact path='/analytic' component={Analytic} />
                </Switch>
                {/* <CopyRight /> */}
            </Router>
        </div>
    )
}

export default AppRouter
