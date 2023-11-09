import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
	isAdmin : boolean
}
  
const initialState : AdminState ={
	isAdmin : false 
}

const adminSlice = createSlice({
  name: "admin",
	initialState,
	reducers : {
		setAdminRole : state => {
			state.isAdmin = true;
		},
		removeAdminRole : state => {
			state.isAdmin = false;
		}
	}
});

export {adminSlice};

export const {setAdminRole, removeAdminRole} = adminSlice.actions;

export default adminSlice.reducer;