import * as ActionTypes from '../../Actions/actionTypes';
const InitialAuthState = {
    isAuth:false,
    data:{}
}
export default function (state = InitialAuthState, action) {
    switch (action.type) {
        case ActionTypes.AUTH_USER:
            return action.payload;
    }
    return state;
}
