import { combineReducers } from "redux";

import reducers from './reducers.js';
import deReducer from "./deReducers.js";

var reducer = combineReducers({
    reducers,
    deReducer
});

export default reducer;