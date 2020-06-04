import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Home';
import SideBar from './SideBar';
import Backdrop from './Backdrop';

class App extends Component {

  state = {
    SideBarOpen: false
  };

  ToggleButtonClick = () => {
    this.setState((prevState) => {
      return {SideBarOpen: !prevState.SideBarOpen};
    });
  };

  BackdropCloseClick = () => {
    this.setState({SideBarOpen: false})
  };

  render() {
    let sideBar;
    let backdrop;

    if (this.state.SideBarOpen) {
      sideBar = <SideBar />;
      backdrop = <Backdrop click={this.BackdropCloseClick} />;
    }

    return (
      <Router>
        <div className="App">
          <NavBar ToggleButtonClick={this.ToggleButtonClick} />
          {sideBar}
          {backdrop}
          <div id="page_body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
