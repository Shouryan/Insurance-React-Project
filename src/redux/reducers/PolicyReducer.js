import { ActionTypes } from "../constants/policyTypes"


const Policy = {
    policy:[]
}

const PolicyReducer = (state=Policy,{type,payload})=>{
    switch(type){
        case ActionTypes.SHOW_POLICY:
            return {...state,policy:payload}
        case ActionTypes.SET_POLICY:
            return {...state,policy:payload}
            

        default:
            return state
    }
}
export default PolicyReducer;