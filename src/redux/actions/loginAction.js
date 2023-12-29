import { LOGIN } from "./actionTypes";

export const login=(userName,passWord)=>{
    return{
        type:LOGIN,
        payLoad:{userName,passWord}
    }
}