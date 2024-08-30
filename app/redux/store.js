
import {configureStore} from "@reduxjs/toolkit";
import getProductsSlice from "@/app/redux/slice/getProductsSlice";


const store = configureStore({
    reducer : {
        getProductsSlice
    }
})

export default store;