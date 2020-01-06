import {registrationConstants} from "../constans/registrationConstants";

export const currentPosition = position => {
    return {
        type: registrationConstants.SET_POSITION, position
    }
};