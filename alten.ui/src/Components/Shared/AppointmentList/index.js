import React, { Component } from 'react';
import Helper from '../../../Helpers/Helper';

/*
props arguments as {
    cancelClickEvent(appointmentID)
    appointments
}
*/
class AppointmentList extends Component {
renderConflictMessage(canceled){
if(canceled){
    return(
        <p class="bg-danger">Conflict</p>
    );
}
}
    renderAppointments() {
        return this.props.appointments.map((appointment) => {
            return (
                <li className="list-group-item" key={appointment.ID}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="list-group-item-heading">{Helper.dateToLocaleString(appointment.Date)}</h4>
                                <p className="list-group-item-text">Doctor Name: {appointment.DoctorName}</p>
                                <p className="list-group-item-text">Patient Name: {appointment.PatientName}</p>
                                {this.renderConflictMessage(appointment.Conflict)}
                            </div>
                            <div className="col-md-2">
                                <button className={`btn btn-danger ${appointment.Canceled ? 'disabled': ''}`} onClick={() => this.props.cancelClickEvent(appointment.ID)}>Cancel</button>
                            </div>
                        </div>
                    </div>


                </li>
            );

        });
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderAppointments()}
                </ul>
            </div>
        );
    }
}

export default AppointmentList;