import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Home';
import SideBar from './SideBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideBar />
        <div id="page_body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
