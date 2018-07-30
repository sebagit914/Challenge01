import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { GetAppointments, cancelAppointment } from '../../Actions/Appointments/index';
import AppointmentList from '../Shared/AppointmentList/index';


class AppointmentsSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCanceled: false,
            isConflict: false
        };
    }
    componentDidMount() {
        this.loadSearchResult();
    }

    loadSearchResult() {
        this.props.GetAppointments(
            {
                Canceled: this.state.isCanceled,
                Conflict: this.state.isConflict
            });
    }
    cancelAppointmentEvent(appointmentID) {
        this.props.cancelAppointment({
            appointmentID: appointmentID,
            userID: this.props.authUser.data.ID,
            listType: 0
        });
    }
    onChangeSearchOption(event) {
        if (event.target.name === "isCanceled") {
            this.setState({
                isCanceled: event.target.checked
            },() =>{
                this.loadSearchResult();
            });
        }
        else if (event.target.name === "isConflict") {
            this.setState({
                isConflict: event.target.checked
            },() =>{
                this.loadSearchResult();
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container form-group">
                    <div className="row">
                        <div className="col-md-2">
                            <input type="checkbox" name="isCanceled" value={this.state.isCanceled} onChange={this.onChangeSearchOption.bind(this)} />
                            <label>Canceled</label>
                        </div>
                        <div className="col-md-2">
                            <input type="checkbox" name="isConflict" value={this.state.isConflict} onChange={this.onChangeSearchOption.bind(this)} />
                            <label>Conflict</label>
                        </div>
                    </div>
                </div>
                <h1>Appointments</h1>
                <div className="text-left">
                    <AppointmentList
                        appointments={this.props.appointments}
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
        appointments: state.appointments.filtered,
    }
}
export default connect(mapStateToProps, { GetAppointments, cancelAppointment })(AppointmentsSearch);