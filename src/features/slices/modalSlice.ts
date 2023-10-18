import { createSlice } from "@reduxjs/toolkit";

interface modalState {
	isOpenRegistration : boolean,
    isOpenLogin : boolean,
}
  
const initialState : modalState ={
	isOpenRegistration : false,
    isOpenLogin : false
}

const modalSlice = createSlice({
  name: "modal",
	initialState,
	reducers : {
		openRegistration : state => {
			state.isOpenRegistration = true;
		},
        closeRegistration : state => {
			state.isOpenRegistration = false;
		},
        openLogin : state => {
			state.isOpenLogin = true;
		},
        closeLogin : state => {
			state.isOpenLogin = false;
		},
	}
});

export {modalSlice};

export const {openLogin, closeLogin, openRegistration, closeRegistration} = modalSlice.actions;

export default modalSlice.reducer;