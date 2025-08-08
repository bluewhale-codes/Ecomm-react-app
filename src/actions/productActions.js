import axios from 'axios'
import {NEW_PRODUCT_REQUEST,
NEW_PRODUCT_SUCCESS,
NEW_PRODUCT_FAIL,
NEW_PRODUCT_RESET} from '../constants/productConstants'


export const newProduct = (productData)=> async (dispatch)=>{
   try {
     dispatch({
        type:NEW_PRODUCT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.post("api/products/new",productData,config);

    dispatch({
        type:NEW_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:NEW_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}