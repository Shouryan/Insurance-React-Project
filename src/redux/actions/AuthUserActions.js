import { ActionTypes } from "../constants/authType"

export const login = (user) => {
    return {
        type: ActionTypes.LOGIN,
        payload: user
    }
}
export const logout = (user) => {
    return {
        type: ActionTypes.LOGOUT,
        payload: user
    }
}