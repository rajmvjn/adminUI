import { Suspense } from "react";
import { Route, Switch } from "react-router";

import routes from "./rotes";
import Loader from "../components/Loader";

const RoutesView = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                    { routes.map((route, index) => {
                        if(route.protected){
                            // protected check to be added and navigate auth in case cookie is not present..
                            return <Route key={index} {...route} />
                        } else {
                            return <Route key={index} {...route} />
                        }                      
                    })}
            </Switch>
        </Suspense>
    );

}

export default RoutesView;