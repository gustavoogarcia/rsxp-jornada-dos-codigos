export const signIn = () => dispatch => {
    const user = { 
        isLoggedIn: true,
        id: 1,
        name: "Adam",
        position: 1, 
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg", 
        points: 789, 
        scholl: { 
            id: 1,
            position: 3, 
            avatar: "", 
            points: 13789 } 
    };
    window.localStorage.setItem("user", JSON.stringify(user))
    dispatch({ type: "SET_USER", user });
}

export const unsetUser = () => dispatch => {
    dispatch({ type: "UNSET_USER" });
}