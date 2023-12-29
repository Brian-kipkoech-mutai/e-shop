import { combineReducers } from "redux";
import authentReducer from "./loginReducer";

 


 const  rootreducer=combineReducers({
    auth:authentReducer,
 })

  export  default rootreducer