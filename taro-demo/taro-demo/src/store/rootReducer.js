import { combineReducers } from 'redux';
import counter from "./counter/reducer";
import home from "./home/reducer";

export default combineReducers({
    counter,
    home
})
