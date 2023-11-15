import { ActionTypes } from "../constants/policyOwned"


const PolicyOwned = {
    policy:[]
}

const PolicyOwnedReducer = (state=PolicyOwned,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_POLICY_OWNED:
            return {...state,policy:payload}
        default:
            return state
    }
}
export default PolicyOwnedReducer;