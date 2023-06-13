import React, { useContext } from 'react';
import Home from './Home/Home';
import AboutPage from './AboutPage';
import Species from './Species';
import Admin from './Admin';
import EventsContainer from './EventsContainer';
import DrawerUserBar from './Home/DrawerUserBar';
import { Route, Switch } from 'react-router-dom';
import { MyContext } from "./MyContext";

function App() {

  const {user} = useContext(MyContext)

  if (!user) return <Home/>

  return (
    <div>
      <DrawerUserBar/>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/about" >
          <AboutPage />
        </Route>
        <Route exact path="/Extinction Events" >
          <EventsContainer />
        </Route>
        <Route exact path="/species" >
          <Species />
        </Route>
        <Route exact path="/admin" >
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
