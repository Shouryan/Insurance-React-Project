import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PolicyReducer from './PolicyReducer';
import PolicyCartReducer from './PolicyCartReducer';
import PolicyOwnedReducer from './PolicyOwnedReducer';
import DiscountReducer from './DiscountReducer';

const rootReducer = combineReducers({
    AuthUser: AuthReducer,
    policyReducer: PolicyReducer,
    policyCart: PolicyCartReducer,
    policyOwned: PolicyOwnedReducer,
    Discount: DiscountReducer,
})
export default rootReducer;