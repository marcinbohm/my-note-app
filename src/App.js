import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
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
