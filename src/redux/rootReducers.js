import { combineReducers } from 'redux';
import userReducer from './reducers/reducer';

const rootReducer = combineReducers({
storeValue:userReducer,
});

export default rootReducer;
