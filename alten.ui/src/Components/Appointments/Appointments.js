import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { GetAppointmentByPatientID, cancelAppointment } from '../../Actions/Appointments/index';
import AppointmentList from '../Shared/AppointmentList/index';


class Appointments extends Component {

    componentWillMount() {
        this.props.GetAppointmentByPatientID(this.props.authUser.data.ID);
    }
    cancelAppointmentEvent(appointmentID) {
        this.props.cancelAppointment({
            appointmentID: appointmentID,
            userID: this.props.authUser.data.ID,
            listType: 0
        });
    }

    render() {
        return (
            <div>
                <h1>My Appointments</h1>
                <div className="text-left">
                    <AppointmentList
                        appointments={this.props.currentUserAppointments}
                        cancelClickEvent={(appointmentID) => { this.cancelAppointmentEvent(appointmentID) }}>
                    </AppointmentList>
                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authUser: state.authUser,
        currentUserAppointments: state.appointments.currentUser,
        allState: state
    }
}
export default connect(mapStateToProps, { GetAppointmentByPatientID, cancelAppointment })(Appointments);