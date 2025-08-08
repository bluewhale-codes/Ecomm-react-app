import {createStore , combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducers/userReducer";
import { newProductReducer } from "./reducers/productReducer";




const reducer = combineReducers({ 
      loginStatus:loginReducer,
      registerStatus:registerReducer,
      registerProduct:newProductReducer
})


const middleware = [thunk];
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;