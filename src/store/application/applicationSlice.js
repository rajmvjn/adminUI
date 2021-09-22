import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appCodes: []
}

const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState: initialState,
    reducers: {
        addFetchedData(state, action) {
            console.log(action.payload);
            state.appCodes = action.payload;
        },

        removeData(state, action) {
            const appCodeId = action.payload.id;
            state.appCodes = state.appCodes.filter(appCode => appCode.id !== appCodeId)
        },

        addCreatedData(state, action) {
            state.appCodes.push(action.payload);
        },

        updateData(state, action) {
            
        }

    }

});

export const appCodeActions = applicationSlice.actions;

export default applicationSlice.reducer;