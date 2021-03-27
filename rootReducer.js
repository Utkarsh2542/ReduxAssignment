import {combineReducers} from 'redux';
import Reducer1 from './reducer';

export default combineReducers({
  Api: Reducer1,
});

