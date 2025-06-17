import {LOGIN_REQUEST ,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        CLEAR_ERRORS,
        REGISTER_USER_FAIL,
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,} from "../constants/userConstants";


export const loginReducer =(state ={login:{}},action) =>{
     switch (action.type) {
         case LOGIN_REQUEST:
             return{
                 loading:true,
                 isAuthenticated2:false
             }
         case LOGIN_SUCCESS:
             return{
                 ...state,
                 loading:false,
                 isAuthenticated2:true,
                 user2:action.payload,
             }
         case LOGIN_FAIL:
             return{
                 ...state,
                 loading:false,
                 isAuthenticated2:false,
                 user2:null,
                 error:action.payload
             }

         case CLEAR_ERRORS :
          
           return {
               ...state,
               error:null,
              
           };
    
         default:
           return state
     }   
 };

 const initialState = {
  loading: false,
  user: null,
  isRegistered: false,
  error: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isRegistered: false,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isRegistered: true,
        error: null,
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isRegistered: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};