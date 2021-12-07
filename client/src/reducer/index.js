import {DO_SOMETHING} from "../actions/index.js"

export function reducer(state={}, {type, payload}){
    switch(type){
        case DO_SOMETHING:
            // do something...
            break;
        
        default:
            // do something else...
            break;
    }
}