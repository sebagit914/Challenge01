import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import AuthGuard from './Components/Shared/AuthGuard/index';


import SignIn from './Components/Authentication/signin';
import Home from './Components/public/Home/index';
import Appointments from './Components/Appointments/Appointments';
import BookAppointment from './Components/Appointments/bookAppointment';
import AppointmentsSearch from './Components/Appointments/AppointmentsSearch';
import UserSearch from './Components/Users/UserSearch';


export const DEAFULT_URL = "/";
export const HOME_URL = "/home";
export const APPOINTMENTS_URL = "/appointments";
export const BOOK_APPOINTMENT_URL = "/appointment/book";
export const CONTROL_APPOINTMENTS_URL = "/control/appointments"
export const CONTROL_USERS_URL = "/control/users"

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={DEAFULT_URL} component={SignIn}></Route>
                    <Route path={HOME_URL} component={AuthGuard(Home)} />
                    <Route path={APPOINTMENTS_URL} component={AuthGuard(Appointments)} />
                    <Route path={BOOK_APPOINTMENT_URL} component={AuthGuard(BookAppointment)} />
                    <Route path={CONTROL_APPOINTMENTS_URL} component={AuthGuard(AppointmentsSearch)} />
                    <Route path={CONTROL_USERS_URL} component={AuthGuard(UserSearch)} />
                    <Route component={SignIn}/>
                </Switch>
            </div>

        );
    }
}
export default Routes;