import {weatherConstants} from "../constans/weatherConstants";

export const addCity = (city) => {

  return {
      type: weatherConstants.ADD_CITY, city
  }
};
