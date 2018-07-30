import axios from 'axios';
import * as services from './servicesURL';

export default class AppointmentServices {
    static bookAppointment(bookAppointmentData) {
        var request = axios.post(services.BOOK_APPOINTMENT_URL, bookAppointmentData);
        return request;
    }
}