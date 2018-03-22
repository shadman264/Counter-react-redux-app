import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const reducers = combineReducers({
    newState: counterReducer
})

export default reducers;
