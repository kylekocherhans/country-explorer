import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name: "isLoading",
    initialState: {
        value: false,
    },
    reducers: {
        setLoadingTrue: (state) => {
            state.value = true;
        },
        setLoadingFalse: (state) => {
            state.value = false;
        }
    }
});

export const { setLoadingTrue, setLoadingFalse } =
isLoadingSlice.actions;

export const selectLoading = (state) => state.isLoading.value;

export default isLoadingSlice.reducer;
