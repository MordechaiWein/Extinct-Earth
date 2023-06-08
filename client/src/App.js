import React, { useContext } from 'react';
import Home from './Home/Home';
import Species from './Species';
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
        <Route exact path="/species" >
          <Species />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
