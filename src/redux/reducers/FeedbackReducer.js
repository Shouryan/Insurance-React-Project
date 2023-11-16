
// feedbackReducer.js
const initialState = {
    feedback: '',
  };
  
  const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FEEDBACK':
      case 'EDIT_FEEDBACK':
        return {
          ...state,
          feedback: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default FeedbackReducer;