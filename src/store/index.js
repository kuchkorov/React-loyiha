import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from '../slices/auth'
export default configureStore({
    reducer: { AuthSlice, devTools: process.env.NODE_ENV !== 'production'}
})