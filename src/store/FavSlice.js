import { createSlice } from "@reduxjs/toolkit"


const initialState = []

const FavSlice = createSlice({
    name: "favourite",
    initialState,
    reducers:{
        storeData(state,action){
            state.push(action.payload)
        },
    }
})

export const {storeData} = FavSlice.actions;

export default FavSlice.reducer;