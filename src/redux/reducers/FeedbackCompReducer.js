import { ActionTypes } from "../constants/feedbackType";


const initialState = {
  unacknowledged: [],
  acknowledged: [],
  byOwner: [],
};

const FeedbackCompReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_UNACKNOWLEDGED:
      return { ...state, unacknowledged: action.payload };
    case ActionTypes.GET_ACKNOWLEDGED:
      return { ...state, acknowledged: action.payload };
    case ActionTypes.GET_BY_OWNER:
      return { ...state, byOwner: action.payload };
    default:
      return state;
  }
};

export default FeedbackCompReducer;