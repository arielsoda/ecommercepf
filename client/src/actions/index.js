// actions
const DO_SOMETHING = "DO_SOMETHING";



// actions cretors
export default function doSomething(payload){
    return{
        payload,
        type: DO_SOMETHING
    }
}