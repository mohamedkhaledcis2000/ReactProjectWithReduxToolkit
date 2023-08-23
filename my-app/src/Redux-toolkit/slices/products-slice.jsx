import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts",async()=>{
    const res = await fetch("http://localhost:9000/products");
    const data = res.json();
    return data
} )

const productsSlice = createSlice({
    initialState:[],
    name:"productsSlice",
    reducesrs:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export const {} =productsSlice.actions ;
export default productsSlice.reducer;