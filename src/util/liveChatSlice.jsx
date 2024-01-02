import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    liveChat: (state, action) => {
        console.log(action)
        state.message.splice(20,1)
      state.message.push(action.payload);
    },
  },
});

export const { liveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer