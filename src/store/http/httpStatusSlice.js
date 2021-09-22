import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    message: '',
    error: null
}

const httpStatusSlice = createSlice({
    name: 'httpStatusSlice',
    initialState: initialState,
    reducers: {
        updateHttpReqResstatus(state, action) {            
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            console.log(state.status);
        }
    }
})

export const httpStatusActions = httpStatusSlice.actions;

export default httpStatusSlice.reducer;