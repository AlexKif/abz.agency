import {userConstants} from "../constans/userConstants";


export const initialState = {
  user: undefined,
  totalUsers: null,
  users: [],
  positions: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type){
    case userConstants.ADD_USER:
      return {
        ...state, user: action.user
      };
    case userConstants.ALL_USERS:
      return  {
        ...state, users: [...state.users, ...action.users.users], totalUsers: action.users.total_users
      };
    case userConstants.ALL_POSITION:
      return {
        ...state, positions: action.positions
      };
    default:
      return state;
  }
};