import { ActionTypes } from "../constants/authType"

const initialUser = {
    user: {
        username:"",
    }
}
const AuthUser={
    user: {
        username:"",
    }
}

const AuthReducer = (state=AuthUser,{type,payload})=>{
    switch(type){
        case ActionTypes.LOGIN:
            return {...state,user:payload}
        case ActionTypes.LOGOUT:
            return state=initialUser
        default:
            return state
    }
}
export default AuthReducer;