import { ActionTypes } from "../constants/discountType";

export const setDiscount = (discount) => {
    return {
        type: ActionTypes.SET_ADD_DISCOUNT,
        payload: discount
    }
}