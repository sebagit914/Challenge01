import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './Authentication/index';
import AppointmentsReducer from './Appointments/index';

const rootReducer = combineReducers({
    authUser: AuthReducer,
    form: formReducer,
    appointments: AppointmentsReducer
});

export default rootReducer;