import { createStore, combineReducers } from "redux";
import AuthReducers from "./reducers";

const RootReducers = combineReducers({
    // reducers
    AuthReducers, 
});

export const store = createStore(RootReducers);
 