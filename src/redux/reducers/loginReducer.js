import { LOGIN, LOGOUT } from "../actions/actionTypes"

 const defaultState={
    isLoggedIn:false,
    user:null
 }


 const authentReducer=(state=defaultState,action)=>{

    switch (action.type){
        case LOGIN:
            if(action.payLoad.userName==="kbrianmutai@gmail.com" && action.payLoad.passWord=== "Gusman"){
            return{
                isLoggedIn:true,
                user:action.payLoad.userName
            };
        }
          break
        case LOGOUT:
            return{
                isLoggedIn:false,
                user:null
            }
        default:
            return state
    }

 }
  export  default authentReducer;