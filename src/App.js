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
import NoteModal from './NoteModal';

class App extends Component {

  state = {
    SideBarOpen: false,
    NewNote: false
  };

  ToggleButtonClick = () => {
    this.setState({SideBarOpen: true});
  };

  createNewNote = () => {
    this.setState((prevState) => {
      return {NewNote: !prevState.NewNote};
    });
  }

  BackdropCloseClick = () => {
    this.setState({SideBarOpen: false})
  };

  render() {
    let backdrop;

    if (this.state.SideBarOpen) {
      backdrop = <Backdrop click={this.BackdropCloseClick} />;
    }

    return (
      <Router>
        <div className="App">
          <NavBar ToggleButtonClick={this.ToggleButtonClick} />
          <SideBar show={this.state.SideBarOpen} showAddNote={this.createNewNote} />
          {backdrop}
          {this.state.NewNote && <NoteModal closeNote={this.createNewNote} />}
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
