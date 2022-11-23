import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../store/counterSlice'
import authReducer from '../store/authSlice'

const store=configureStore({
    reducer:{
        count:counterReducer,
        auth:authReducer
    }
});

export default store;