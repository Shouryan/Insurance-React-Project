import { ActionTypes } from "../constants/policyTypes"


export const showPolicy = (policy) => {
    return {
        type: ActionTypes.SHOW_POLICY,
        payload: policy
    }
}
// export const logout = (user) => {
//     return {
//         type: ActionTypes.LOGOUT,
//         payload: user
//     }
// }
export const setPolicy = (policy) => {
    return {
        type: ActionTypes.SET_POLICY,
        payload: policy
    }
}