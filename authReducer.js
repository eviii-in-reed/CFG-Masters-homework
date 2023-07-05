const initialState = {
    username: null,
  };
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        username: null,
      };
    default:
      return state;
  }
};
  
  export default authReducer;
  