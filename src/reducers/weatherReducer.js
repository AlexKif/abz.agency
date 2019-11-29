import {weatherConstants} from "../constans/weatherConstants";


export const initialState = {
  cityWeather: {}
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type){
    case weatherConstants.ADD_CITY:
      return {
        ...state, cityWeather: action.city
      };
    default:
      return state;
  }
};