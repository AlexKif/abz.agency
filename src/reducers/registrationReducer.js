import {registrationConstants} from "../constans/registrationConstants";


export const initialState = {
    currentPosition: {}
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case registrationConstants.SET_POSITION:
            return {...state, currentPosition: action.position};
        default:
            return state;
    }
};