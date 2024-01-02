
import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import cacheSlice from './cacheSlice';
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
reducer : {
app: appSlice,
search :cacheSlice,
chat:liveChatSlice,
} 
});

export default store;