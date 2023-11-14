import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PolicyReducer from './PolicyReducer';

const rootReducer = combineReducers({
    AuthUser: AuthReducer,
    policyReducer: PolicyReducer,
})
export default rootReducer;