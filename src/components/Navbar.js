import React, { Component } from 'react';
import logo from '../logo.svg';
import {Icon} from "semantic-ui-react";
// import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="border-bottom uk-section-muted">
      <nav className="container uk-navbar-container uk-flex-wrap" data-uk-navbar>
        <div className="uk-flex-between uk-margin-remove uk-width-1-1@s" data-uk-grid>
            <img className="logo" src={logo} alt=""/>
  
          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle" href=""><span className="uk-margin-small-right">Search </span><Icon name='search' /></a>
              <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input className="uk-search-input" type="search" placeholder="Search..." autoFocus/>
                </form>
              </div>
            </div>
  
          </div>
        </div>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <li className="uk-active"><a href="#" className="uk-text-capitalize"><Icon name='home' size='large' />Home</a></li>
            <li><a href="" className="uk-text-capitalize">Patients Home</a></li>
            <li>
              <a href="" className="uk-text-capitalize">Inbox<span className="ui red circular label uk-margin-small-left uk-badge">2</span><Icon name='caret down' /></a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a >Active</a></li>
                  <li><a >Item</a></li>
                  <li><a >Item</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav ">
            <li>
              <a href="" className="uk-text-capitalize">Setting<Icon name='caret down' /></a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a >Active</a></li>
                  <li><a >Item</a></li>
                  <li><a >Item</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
