import {createSlice} from '@reduxjs/toolkit';

const authSlice=createSlice({
    name:'auth-slice',
    initialState:{
        auth:false
    },
    reducers:{
        login(state){
            state.auth=true;
        },
        logout(state){
            state.auth=false;
        }
    }
});

const {actions,reducer} =authSlice;

export const {login,logout}=actions;
export default reducer;