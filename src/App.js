import { useState } from 'react';

import MainHeader from "./layout/MainHeader";
import MainNavigation from "./layout/MainNavigation";

import './App.css';
import { Fragment } from 'react';
import Loader  from './components/Loader';
import { useSelector } from 'react-redux';
import RoutesView from './routes/RoutesView';
import Banner from './components/Banner';

const App = () => {  

  const [showNavBar, setShowNavBar] = useState(true);
  const httpStatusSlice = useSelector(state=>state.httpStatusSlice);
  console.log(httpStatusSlice)

  const navBarToggleHandler = () => {
    setShowNavBar((preState) => {      
      return !preState;
    })
  }

  return (
    <Fragment>
      { httpStatusSlice.status === 'success' && <Banner responseStatusData = {httpStatusSlice}/> }
      { httpStatusSlice.status === 'pending' && <Loader /> }
      <div className="grid">
        <MainHeader onClick={navBarToggleHandler}/>
        {showNavBar && <MainNavigation />}
        <main className= { showNavBar? 'main' : 'main main-stretch'  } >
          <RoutesView />
        </main>
      </div>
    </Fragment>    
  )
}

export default App;