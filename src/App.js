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
import chosenNote from './ChosenNote';
import EditNoteModal from './EditNoteModal';

class App extends Component {

  state = {
    SideBarOpen: false,
    NewNote: false,
    EditNote: false
  };

  ToggleButtonClick = () => {
    this.setState({SideBarOpen: true});
  };

  createNewNote = () => {
    this.setState((prevState) => {
      return {NewNote: !prevState.NewNote};
    });
  }

  editingNote = () => {
    this.setState((prevState) => {
      return {EditNote: !prevState.EditNote};
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
          {this.state.EditNote && <EditNoteModal closeNote={this.editingNote} />}
          <div id="page_body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/note/:title" component={chosenNote} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
