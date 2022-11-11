import {createSlice} from "@reduxjs/toolkit";
import {initialCountry} from "../../assets/initialCountry";


export const displayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        },
    },
});

export const {setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions;

export const selectDisplayCountry = (state) => state.displayCountry;

export default displayCountrySlice.reducer;

