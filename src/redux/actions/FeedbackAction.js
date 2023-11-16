// feedbackActions.js
import { ActionTypes } from '../constants/feedbackType';


export const getUnacknowledge = (feedback) => {
    return {
        type: ActionTypes.GET_UNACKNOWLEDGED,
        payload: feedback
    }
}
export const getAcknowledge = (feedback) => {
    return {
        type: ActionTypes.GET_ACKNOWLEDGED,
        payload: feedback
    }
}
export const byOwnerResponse = (feedback) => {
    return {
        type: ActionTypes.GET_BY_OWNER,
        payload: feedback
    }
}