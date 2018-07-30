import * as ActionTypes from '../../Actions/actionTypes';
const INITIAL_STATE = {
    filtered: [],
    currentUser: []
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.GET_PATIENT_APPOINTMENTS:
            return { ...state, currentUser: action.payload }
        case ActionTypes.GET_APPOINTMENTS:
            return { ...state, filtered: action.payload }
        case ActionTypes.REMOVE_CURRENT_USER_APPOINTMENT:
            {
                let itemIndex = state.currentUser.findIndex((item, i) => {
                    return item.ID === action.payload;
                });
                state.currentUser.splice(itemIndex, 1);
                return { ...state, currentUser: state.currentUser }
            }
            case ActionTypes.REMOVE_FILTER_APPOINTMENT:
            {
                let itemIndex = state.filtered.findIndex((item, i) => {
                    return item.ID === action.payload;
                });
                state.filtered.splice(itemIndex, 1);
                return { ...state, filtered: state.filtered }
            }
    }
    return state;
}