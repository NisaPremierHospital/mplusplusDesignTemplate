import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import Landing from "./components/Landing";
import PatientProfile from "./components/PatientProfile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/patientprof" component={PatientProfile}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
