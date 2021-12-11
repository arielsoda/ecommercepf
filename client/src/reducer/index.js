import {DO_SOMETHING, LOGIN, LOGOUT} from "../actions";

const initialState = {
    loginInfo:{
        isConnected: false,
        user: {
            name: "",
            email: ""
        }
    }
}

export function reducer(state=initialState, {type, payload}){
    console.log(type)
    switch(type){
        case LOGIN:
            return{
                ...state,
                loginInfo: payload
            }
        
        case LOGOUT:
            return{
                ...state,
                loginInfo: payload
            }

        default:
            // do something else...
            return state
    }
}

export default reducer