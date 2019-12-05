import {userConstants} from "../constans/userConstants";


export const initialState = {
  user: undefined,
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type){
    case userConstants.ADD_USER:
      return {
        ...state, user: action.user
      };
    case userConstants.ALL_USERS:
      return  {
        ...state, users: action.users
      };
    default:
      return state;
  }
};