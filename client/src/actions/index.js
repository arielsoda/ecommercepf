// actions
export const DO_SOMETHING = "DO_SOMETHING";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// actions cretors
export function doSomething(payload){
    return{
        payload,
        type: DO_SOMETHING
    }
}

export function login(payload){
    let res = null;
    
    return async (dispatch) => {
        if(payload.submitType === "login"){
            // console.log(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}&password=${payload.user.password}`);
            
            // res = await axios(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}&password=${payload.user.password}`);
            
        }else{
            var {user} = payload;
            console.log(`http://localhost/login?name=${user.givenName}&email=${user.email}`);

            // res = await axios(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}`);
        }
        
        res = {
            isConnected: true,
            user: {
                name: user.givenName || "",
                email: user.email || ""
            }
        }

        console.log(res)
        // res = {status: "failure"}

        return dispatch({
            type: LOGIN,
            payload: res
        })
    }
}

export function logOut(){
    return {
        type: LOGIN,
        payload: {isConnected: false}
    }
    
}