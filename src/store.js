import {createStore , combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducers/userReducer";




const reducer = combineReducers({ 
      loginStatus:loginReducer,
      registerStatus:registerReducer
})


const middleware = [thunk];
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;