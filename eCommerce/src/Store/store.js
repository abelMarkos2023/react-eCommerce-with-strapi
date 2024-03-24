import {configureStore} from  "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import {productApi} from '../Redux/products'
// the below code fragment can be found in:

export const store = configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer,
    
    },
    middleware:(getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
})
