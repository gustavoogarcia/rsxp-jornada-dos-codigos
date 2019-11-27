export const getUser = () => dispatch => {
    const user = { 
        id: 1,
        position: 76, 
        avatar: "", 
        points: 789, 
        scholl: { 
            id: 1,
            position: 3, 
            avatar: "", 
            points: 13789 } 
    };

    dispatch({ type: "SET_USER", user });
}