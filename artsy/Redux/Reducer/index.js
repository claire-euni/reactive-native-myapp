import {combineReducers} from 'redux';
import {numberReducer} from './numberReducer';

// reducer들을 한꺼번에 묶어주는 root
const rootReducer = combineReducers({
  numberReducer,
});

export default rootReducer;
