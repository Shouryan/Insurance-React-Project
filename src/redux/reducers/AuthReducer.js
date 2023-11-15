import { ActionTypes } from "../constants/authType"

const initialUser = {
    user:{}
}


const AuthReducer = (state=initialUser,{type,payload})=>{
    switch(type){
        case ActionTypes.LOGIN:
            return {...state,user:payload}
        case ActionTypes.LOGOUT:
            return {...state,user:{}}
        default:
            return state
    }
}
export default AuthReducer;