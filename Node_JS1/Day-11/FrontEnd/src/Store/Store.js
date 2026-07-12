import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk"
import { authReducer } from "../Reducer/authReducer";



const rootReducer = combineReducers({
    auth: authReducer
})

const enhancer = applyMiddleware(thunk)

export const myStore = createStore(rootReducer,enhancer)