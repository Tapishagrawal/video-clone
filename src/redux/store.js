import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"
import { reducer as postReducer } from "./reducer";
const rootReducer = combineReducers({
    postReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)) 