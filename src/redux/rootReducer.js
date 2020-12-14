import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import { Types } from './authReducer';

const resettable = resettableReducer(Types.LOGOUT);

const rootReducer = combineReducers({
  auth: resettable(require('./authReducer').reducer),
});

export default rootReducer;
