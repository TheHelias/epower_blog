import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
    )
  return (
    <Switch>
    <App/>
  </Switch>
  );
}

export default App;
