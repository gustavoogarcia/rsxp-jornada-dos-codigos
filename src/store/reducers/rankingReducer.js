
  const initialState = {};
  
  const rankingReducer = (state = initialState, action) => {
    const { type, rankingList } = action;
    switch (type) {
      case "SET_RANKING_LIST":
        return { ...state, rankingList }
      default:
        return state;
    }
  };
  
  export default rankingReducer;
