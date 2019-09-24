const initialState = {
    isLogin:false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case login:
       return {isLogin:true}
    default:
        return state
    }
}
export function login(){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch({type:'login'})
        }, 2000);
    }
}

