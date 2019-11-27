import { combineReducers } from "redux";
import rankingReducer from './rankingReducer'
import userReducer from './userReducer'

export default combineReducers({ 
    user: userReducer,
    ranking: rankingReducer,
});
