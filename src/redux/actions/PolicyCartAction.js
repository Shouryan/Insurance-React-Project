import { ActionTypes } from "../constants/policyCartType"


export const setPolicyCart = (cart) => {
    return {
        type: ActionTypes.SET_POLICY_CART,
        payload: cart
    }
}
export const setPolicyCartPolicy = (policy) => {
    return {
        type: ActionTypes.SET_POLICY_CART_POLICY,
        payload: policy
    }
}
