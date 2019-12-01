import {userConstants} from "../constans/userConstants";
import {usersServices} from "../services/usersServices";

export const getUser = id => {
    const addUser = (user) => {
        return {
            type: userConstants.ADD_USER, user
        }
    };

    return dispatch => {
        usersServices.getUser(id).
        then(user => dispatch(addUser(user)));
    };


};




