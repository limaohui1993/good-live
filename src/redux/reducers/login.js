import {SET_LOGIN,OUT_LOGIN} from "../constances/index"

const defaultState={
    user:{
        token:"",
        nick:""
    }
}

export default function login(state=defaultState,action){
    switch (action.type) {
        case SET_LOGIN:
            return {
                user:action.user
            }
        case OUT_LOGIN:
            return {
                user:{
                    token:"",
                    nick:""
                }
            }
        default:
            return state
    }
}