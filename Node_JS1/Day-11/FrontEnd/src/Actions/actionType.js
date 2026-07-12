import * as types from "../Actions/action.js"

export const getLoginRequest = () => {
    return {
        type: types.GET_LOGIN_REQUEST
    }
}


export const getLoginSuccess = (payload) => {
    return {
        type: types.GET_LOGIN_REQUEST,
        payload: payload
    }
}


export const getLoginFailure = () => {
    return {
        type: types.GET_LOGIN_REQUEST
    }
}