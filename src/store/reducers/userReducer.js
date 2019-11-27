
  const initialState = {};
  
  const userReducer = (state = initialState, action) => {
    const { type, user } = action;
    switch (type) {
      case "SET_USER":
        return { ...state, ...user }
      default:
        return state;
    }
  };
  
  export default userReducer;
  