import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './slices/products-slice';
import cardSlice from './slices/card-slice';

export const Store = configureStore({
    reducer :{
        products:productsSlice,
        card:cardSlice
    }

}) 
