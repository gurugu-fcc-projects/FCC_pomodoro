import { combineReducers } from 'redux';
import dataReducer from './data';
import savedDataReducer from './savedData';

const rootReducer = combineReducers({
  data: dataReducer,
  savedData: savedDataReducer
});

export default rootReducer;
