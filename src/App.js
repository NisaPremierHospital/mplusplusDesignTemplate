import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import Landing from "./components/Landing";
import PatientProfile from "./components/PatientProfile";
import Login from "./components/Login";
import Documents from "./components/Documents";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/patientprof" component={PatientProfile}/>
          <Route path="/login" component={Login}/>
          <Route path="/documents" component={Documents}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
