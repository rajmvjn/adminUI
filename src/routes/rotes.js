import React from "react";

import Dashboard from "../pages/dashboard/Dashboard";
const Application = React.lazy( () => import('../pages/application/Application') );

const routes = [
    {
        path: "/",
        component: Dashboard,
        exact: true
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact: true
    },
    {
        path: "/application",
        component: Application,
        exact: true
    }
]

export default routes;