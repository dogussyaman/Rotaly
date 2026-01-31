import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestUser } from "./test-user-type";


const initialState: TestUser = {
    email: '',
    role: ''
}

const testUserSlice = createSlice({
    name:"testUser",
    initialState,
    reducers:{
        setUserRole: (state, action: PayloadAction<string>) =>{
         state.role = action.payload;
        },
        setUserEmail: (state, action: PayloadAction<string> )=>{
         state.email = action.payload;
        },
        logout: (state) => {
            state.email = '';
            state.role = '';
        }

    }
})


export const {setUserEmail, setUserRole, logout} = testUserSlice.actions

export default testUserSlice.reducer
