import React, { useContext } from 'react';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import { MyContext } from "./MyContext";

function App() {

  const {user} = useContext(MyContext)

  if (!user) return <Home/>

  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
