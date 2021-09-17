import { useState } from 'react';
import { Route, Switch } from "react-router";

import MainHeader from "./layout/MainHeader";
import MainNavigation from "./layout/MainNavigation";
import routes from "./routes/rotes";

import './App.css';

const App = () => {  

  const [showNavBar, setShowNavBar] = useState(true);

  const navBarToggleHandler = () => {
    setShowNavBar((preState) => {      
      return !preState;
    })
  }

  return (
    <div className="grid">
      <MainHeader onClick={navBarToggleHandler}/>
      {showNavBar && <MainNavigation />}
      <main className= { showNavBar? 'main' : 'main main-stretch'  } >
        {console.log()}
        <Switch>
                { routes.map((route, index) => {
                  return <Route key={index} {...route} />
                })}
        </Switch>
      </main>
    </div>
  )

}

export default App;