import { createSlice } from "@reduxjs/toolkit";
import { dashboard } from "../../mock/dashboard";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        appCodes: []
    },
    reducers: {
        addFetchedData(state, action) {
            console.log(action.payload);
            //state.appCodes = action.payload;
            state.appCodes = dashboard;
        },
    }
});

export const dashboardActions = dashboardSlice.actions

export default dashboardSlice.reducer;
