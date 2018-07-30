import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import AppointmentServices from '../../Services/AppointmentServices';
import UserServices from '../../Services/UserServices';
import { UserTypes } from '../../Types/UserTypes';
import DateTimePicker from 'react-datetime-picker';

class BookAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorID: null,
            appointmentDateTime: new Date(),
            isValidForm:false,
            doctors:[]
        };
        this.getDoctors();
    }
    setDoctorID(selectOption) {
        this.setState({ doctorID: selectOption.target.value });
    }
    getDoctors() {
        UserServices.getusersByType(UserTypes.Doctor)
            .then(response => {
                this.setState({doctors:response.data});
            });
    }
    renderDoctorOptions(){
        return this.state.doctors.map(user => {
            return (
                <option value={user.ID} key={user.ID}>{user.FirstName + " " + user.LastName}</option>
            );
        });
    }
    isValid() {
        if (!this.state.doctorID || !this.state.appointmentDateTime) {
            return false;
        }
        return true;
    }
    onSubmit(event) {
        
        if (!this.isValid()) {
            return;
        }
        let bookData = {
            Appointment: {
                PatientUserID: this.props.authUser.data.ID,
                DoctorUserID: this.state.doctorID,
                Date: this.state.appointmentDateTime},
            CurrentUserID: this.props.authUser.data.ID
        };
        AppointmentServices.bookAppointment(bookData)
        .then(response =>{
            if(response.data <= 0){
                return;
            }
            this.setState({isValidForm:true});
        });

    }
    rednerError() {
        if (this.isValid()) { return; }
        return (
            <div className="text-danger">
                <b>please Select Doctor and Date</b>
            </div>
        );
    }
    render() {
        if(this.state.isValidForm){
            return(
                <Redirect to={Routes.APPOINTMENTS_URL}></Redirect>
            );
        }
        return (
            <div>
                <form  className="needs-validation">
                    <fieldset className="form-group">
                        <legend>Book Appointment</legend>
                        <div>
                            <label>Select Doctor:</label>
                            <select onChange={this.setDoctorID.bind(this)} name="doctorID" className="form-control" required>
                                <option value="">Select...</option>
                                {this.renderDoctorOptions()}
                            </select>
                        </div>
                        <div>
                            <label>Select Date Time:</label>
                            <DateTimePicker value={this.state.appointmentDateTime} className="form-control" required></DateTimePicker>
                        </div>
                        <button type="button" onClick={this.onSubmit.bind(this)} className="btn btn-primary">Book</button>
                        {this.rednerError()}
                    </fieldset>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authUser: state.authUser
    }
}
export default connect(mapStateToProps, null)(BookAppointment);