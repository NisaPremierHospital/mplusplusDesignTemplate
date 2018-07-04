import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import Landing from "./components/Landing";
import PatientProfile from "./components/PatientProfile";
import Login from "./components/Login";
import Documents from "./components/Documents";
import Report from "./components/Report";
import SelectPatient from "./components/SelectPatient";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/patientprof" component={PatientProfile}/>
          <Route path="/login" component={Login}/>
          <Route path="/documents" component={Documents}/>
          <Route path="/reports" component={Report}/>
          <Route path="/selectpatient" component={SelectPatient}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
