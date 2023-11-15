import { ActionTypes } from "../constants/policyCartType"


const Cart = {
    cart:[],
    policy:[]
}

const PolicyCartReducer = (state=Cart,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_POLICY_CART:
            return {...state,cart:payload}
        case ActionTypes.SET_POLICY_CART_POLICY:
            return {...state,policy:payload}
        default:
            return state
    }
}

export default PolicyCartReducer;
