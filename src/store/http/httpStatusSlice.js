import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    message: '',
    error: null,
    statusCode: ''
}

const httpStatusSlice = createSlice({
    name: 'httpStatusSlice',
    initialState: initialState,
    reducers: {
        updateHttpReqResstatus(state, action) {       
            console.log(action.payload);     
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.statusCode = action.payload.statusCode;            
        }
    }
})

export const httpStatusActions = httpStatusSlice.actions;

export default httpStatusSlice.reducer;