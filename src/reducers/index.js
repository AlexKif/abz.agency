import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import { reducer as formReducer } from 'redux-form'
import {registrationReducer} from "./registrationReducer";

const appState = combineReducers({
    usersReducer,
    form: formReducer,
    registrationReducer
});

export default appState;

