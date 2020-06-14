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
import ChosenNote from './ChosenNote';
import EditNoteModal from './EditNoteModal';
import notes from './CustomNotes';

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

    const {NewNote, SideBarOpen, EditNote} = this.state;
   
    let backdrop;

    if (SideBarOpen) {
      backdrop = <Backdrop click={this.BackdropCloseClick} />;
    }

    return (
      <Router>
          <NavBar ToggleButtonClick={this.ToggleButtonClick} />
          <SideBar show={SideBarOpen} showAddNote={this.createNewNote} editChosenNote={this.editingNote} />
          {backdrop}
          {NewNote && <NoteModal closeNote={this.createNewNote} />}
          {EditNote && <EditNoteModal closeNote={this.editingNote} />}
          <div id="page_body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/note/:title" component={ChosenNote} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
