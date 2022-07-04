
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
recentuser : null,
orders:[],
allorders:[]
}

const Globalstste = createSlice({
  name: "second",
  initialState,
  reducers: {
 signinuser :(state,{payload})=>{
             state.recentuser=payload
 },
 signoutuser:(state)=>{
    
        state.recentuser = null;
    },
 
 addorder :(state,{payload})=>{
         state.orders=payload
 },
getevery:(state,{payload})=>{
state.allorders= payload
}
  }
});

export const { signinuser, signoutuser, addorder, getevery} = Globalstste.actions

export default Globalstste.reducer