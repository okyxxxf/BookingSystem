import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/authServices/AuthService";

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
			const service = new AuthService();
			service.logout();
			localStorage.removeItem('auth-token');
			state.isAuth = false;
		}
	}
});

export {authSlice};

export const {setAuth, disableAuth} = authSlice.actions;

export default authSlice.reducer;