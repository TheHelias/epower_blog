import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostItem from './pages/BlogPostItem';


function App() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/blogposts/:postID' component={BlogPostItem}></Route>
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
