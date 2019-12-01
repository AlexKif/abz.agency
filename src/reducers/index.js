import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";

const appState = combineReducers({
    usersReducer: usersReducer
});

export default appState;