import { ActionTypes } from "../constants/discountType";


const Discount ={
    discount:[]
}

const DiscountReducer = (state=Discount,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_ADD_DISCOUNT:
           return {...state,discount:payload}
        default:
            return state
    }
}
export default DiscountReducer;