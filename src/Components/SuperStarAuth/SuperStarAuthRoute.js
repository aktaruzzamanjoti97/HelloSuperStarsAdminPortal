import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import './Content/login.css'
import SuperStarHome from './SuperStarHome'
import SuperStarLogin from './Content/SuperStarLogin'
import SuperStarRegistration from './Content/SuperStarRegistration'
import SuperStarOTP from './Content/SuperStarOTP'
import SuperStarQR from './Content/SuperStarQR'
import Header from '../Pages/Header/Header'

const SuperStarRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Header}/>
                    <Route exact path='/superstar-admin' component={SuperStarHome}/>
                    <Route exact path='/superstar-admin/login' component={SuperStarLogin}/>
                    <Route exact path='/superstar-admin/registration' component={SuperStarRegistration}/>
                    <Route exact path='/superstar-admin/otp' component={SuperStarOTP}/>
                    <Route exact path='/superstar-admin/qr' component={SuperStarQR}/>
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default SuperStarRoute
