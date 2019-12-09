import {userConstants} from "../constans/userConstants";
import {usersServices} from "../services/usersServices";

export const getUser = id => {
    return dispatch => {
        usersServices.getUser(id)
        .then(user => dispatch(addUser(user)));
    };

    function addUser(user){
        return {
            type: userConstants.ADD_USER, user
        }
    }
};

export const getAllUsers = (page, count) => {
  return dispatch => {
      usersServices.getAllUsers(page, count)
      .then(users => dispatch(getAllUsers(users)))
  };

  function getAllUsers(users) {
      return {
          type: userConstants.ALL_USERS, users
      }
  }
};

export const getPosition = () => {
    return (dispatch) => {
        return usersServices.getPosition().then(positions => dispatch(getPosition(positions)))
    };
    
    function getPosition(positions) {
        return {
            type: userConstants.ALL_POSITION, positions
        }
    }
};

export const updateUsers = (page, count) => {
    return dispatch => {
        usersServices.getAllUsers(page, count)
            .then(users => dispatch(getAllUsers(users)))
    };

    function getAllUsers(users) {
        return {
            type: userConstants.UPDATE_USERS, users
        }
    }
};




