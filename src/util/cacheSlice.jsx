import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "search",
    initialState: {},

    reducers: {
        storeCache: (state, action) => {
            return {
                ...action.payload,
                ...state,
              };
        }
    }
});

export const { storeCache } = cacheSlice.actions;
export default cacheSlice.reducer;
