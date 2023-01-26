import { createSlice } from '@reduxjs/toolkit';

export const nameVerificationSlice = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
      setVerificationName:(state,action)=>{
        return action.payload
      }
        
    }
})

export const { setVerificationName} = nameVerificationSlice.actions;

export default nameVerificationSlice.reducer;