import axios from 'axios';
import * as services from './servicesURL';

export default class UserServices {
   static getusersByType(userType) {
        var request = axios.get(services.GET_USERS_BYTYPE_URL, {
            params: {
                UsertType: userType
            }
        });
        return request;
    }
}