import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer";

const appState = combineReducers({
    weatherReducer
});

export default appState;