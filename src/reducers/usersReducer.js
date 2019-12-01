import {userConstants} from "../constans/userConstants";


export const initialState = {
  user: undefined
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type){
    case userConstants.ADD_USER:
      return {
        ...state, user: action.user
      };
    default:
      return state;
  }
};