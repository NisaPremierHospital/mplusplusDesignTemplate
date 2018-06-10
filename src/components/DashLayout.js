import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import Navbar from "./Navbar";

class DashLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Navbar}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default DashLayout;
