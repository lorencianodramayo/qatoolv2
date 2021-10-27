import dataReducer from "./data";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;