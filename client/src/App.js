import React, { useContext } from 'react';
import Home from './Home/Home';
import AboutPage from './AboutPage';
import Species from './Species';
import Admin from './Admin';
import Favorites from './Favorites';
import InformationCard from './InformationCard';
import CommentPage from './CommentPage';
import AnimalContainer from './AnimalContainer';
import EventsContainer from './EventsContainer';
import DrawerUserBar from './Home/DrawerUserBar';
import { Route, Switch } from 'react-router-dom';
import { MyContext } from "./MyContext";

function App() {

  const {user, isLoading} = useContext(MyContext)

  if (isLoading) {
  
    return <div></div>
  }

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
        <Route exact path="/favorites" >
          <Favorites />
        </Route>
        <Route exact path="/animals/:classification" >
          <AnimalContainer />
        </Route>
        <Route exact path="/creature/:id" >
          <InformationCard />
        </Route>
        <Route exact path="/comment/:id" >
          <CommentPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
