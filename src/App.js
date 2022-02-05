
// import './App.css';
import React from 'react';
import Category from './Components/Category';
import SearchList from './Components/SearchList';
import SearchByName from './Components/Searchbyname';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Category}/>
          <Route exact path='/search' component = {SearchList}/>
          <Route exact path='/searchbyname' component={SearchByName}/>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
