import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard/dashboardSlice";
import applicationReducer from "./application/applicationSlice";
import httpStatusReducer from "./http/httpStatusSlice";

const store = configureStore({
    reducer: {
        dashboardSlice: dashboardReducer,
        applicationSlice: applicationReducer,
        httpStatusSlice: httpStatusReducer

    }
});

export default store;