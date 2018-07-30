import axios from 'axios';
import * as types from '../actionTypes';
import * as services from '../../Services/servicesURL';

export function GetAppointmentByPatientID(patientID) {
    return function (dispatch) {

        var request = axios.get(services.APPOINTMANTS_BY_PATIENT_ID_URL + patientID)
            .then(Response => {
                dispatch(
                    {
                        type: types.GET_PATIENT_APPOINTMENTS,
                        payload: Response.data
                    });
            });
    }
}

export function GetAppointments(searchOptions) {
    return function (dispatch) {

        var request = axios.get(services.GET_APPOINTMENTS_URL, {
            params: {
                Canceled: searchOptions.Canceled,
                Conflict:searchOptions.Conflict
            }
        })
            .then(Response => {
                dispatch(
                    {
                        type: types.GET_APPOINTMENTS,
                        payload: Response.data
                    });
            });
    }
}

export function cancelAppointment({ appointmentID, userID, listType }) {
    return function (dispatch) {

        var request = axios.put(services.CANCEL_APPOINTMENT_URL,
            {
                ID: appointmentID,
                CurrentUserID: userID
            })
            .then(response => {
                if (response.data <= 0) { return; }
                if (listType === 0) {
                    dispatch({
                        type: types.REMOVE_CURRENT_USER_APPOINTMENT,
                        payload: appointmentID
                    });
                    if (listType === 1) {
                        dispatch({
                            type: types.REMOVE_FILTER_APPOINTMENT,
                            payload: appointmentID
                        });
                    }
                }


            });
    }

}