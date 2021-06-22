import React from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Analytic from '../Pages/Analytic'
import NavbarMain from '../Layout/Navbar'
import Traffic from '../Pages/Traffic'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavbarMain />
                <Switch>
                    <Route exact path='/' component={Traffic} />
                    <Route exact path='/analytic' component={Analytic} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
