import React, { useContext } from 'react';
import Home from './Home/Home';
import AboutPage from './AboutPage';
import Species from './Species';
import Admin from './Admin';
import Bookmark from './Bookmark';
import InformationCard from './InformationCard';
import CommentCard from './CommentCard';
import AnimalContainer from './AnimalContainer';
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
        <Route exact path="/bookmark" >
          <Bookmark />
        </Route>
        <Route exact path="/:classification" >
          <AnimalContainer />
        </Route>
        <Route exact path="/creature/:id" >
          <InformationCard />
        </Route>
        <Route exact path="/comment/:id" >
          <CommentCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
