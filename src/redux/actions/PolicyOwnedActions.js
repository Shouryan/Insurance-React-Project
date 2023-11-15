import { ActionTypes } from "../constants/policyOwned"

export const setPolicyOwned = (policy) => {
    return {
        type: ActionTypes.SET_POLICY_OWNED,
        payload: policy
    }
}