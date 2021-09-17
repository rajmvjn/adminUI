import Dashboard from "../pages/dashboard/Dashboard";
import Application from "../pages/application/Application";

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