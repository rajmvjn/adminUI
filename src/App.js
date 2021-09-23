import { useState } from 'react';
import { Route, Switch } from "react-router";

import MainHeader from "./layout/MainHeader";
import MainNavigation from "./layout/MainNavigation";
import routes from "./routes/rotes";

import './App.css';
import { Fragment } from 'react';
import Loader  from './components/UIElements/Loader';
import { useSelector } from 'react-redux';

const App = () => {  

  const [showNavBar, setShowNavBar] = useState(true);
  const httpStatus = useSelector(state=>state.httpStatusSlice.status);console.log(httpStatus)

  const navBarToggleHandler = () => {
    setShowNavBar((preState) => {      
      return !preState;
    })
  }

  return (
    <Fragment>
      { httpStatus === 'pending' && <Loader /> }
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
    </Fragment>
    
  )

}

export default App;