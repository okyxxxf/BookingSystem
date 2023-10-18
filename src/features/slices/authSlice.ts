import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	isAuth : boolean
}
  
const initialState : AuthState ={
	isAuth : !!localStorage['auth-token']
}

const authSlice = createSlice({
  name: "auth",
	initialState,
	reducers : {
		setAuth : state => {
			state.isAuth = true;
		},
		disableAuth : state => {
			state.isAuth = false;
		}
	}
});

export {authSlice};

export const {setAuth, disableAuth} = authSlice.actions;

export default authSlice.reducer;