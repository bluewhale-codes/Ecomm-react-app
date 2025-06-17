import {LOGIN_REQUEST ,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        CLEAR_ERRORS,
        REGISTER_USER_FAIL,
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,} from "../constants/userConstants";
import axios from 'axios';



export const login = (email,password)=> async(dispatch)=>{
    try {
      dispatch({
         type:LOGIN_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `api/login`
      const {data} = await axios.post(link,{email,password},config);
 
     dispatch({
         type:LOGIN_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:LOGIN_FAIL,
           payload:error.response.data.message
       });
    }
 }
export const register = (fullName,email,password,phone)=> async(dispatch)=>{
    try {
      dispatch({
         type:REGISTER_USER_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `api/createUser`
      const {data} = await axios.post(link,{fullName,email,password,phone},config);
 
     dispatch({
         type:REGISTER_USER_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:REGISTER_USER_FAIL,
           payload:error.response.data.message
       });
    }
 }
