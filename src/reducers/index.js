import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import { reducer as formReducer } from 'redux-form'

const appState = combineReducers({
    usersReducer,
    form: formReducer
});

export default appState;