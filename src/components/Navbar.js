import React, { Component } from 'react';
import logo from '../img/m++.png';
import {Dropdown, Icon} from "semantic-ui-react";
// import './App.css';

class Navbar extends Component {
  
  render() {
    const trigger = (
      <span className="uk-text-capitalize">
        <span className="ui red circular label uk-margin-small-right uk-badge">
          2
        </span>
        Inbox
      </span>
    );
  
    const options = [
      {
        key: 'user',
        text: (
          <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile' },
    ]
    const trigger1 = (
      <span>
        <Icon name='user' /> Hello, Bob
      </span>
        );
  
    const options1 = [
      {
        key: 'user',
        text: (
          <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile' },
      { key: 'stars', text: 'Your Stars' },
      { key: 'explore', text: 'Explore' },
      { key: 'integrations', text: 'Integrations' },
      { key: 'help', text: 'Help' },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out' },
    ]
    return (
      <div id="nav" className="border-bottom uk-section-muted uk-box-shadow-small">
      <nav className="container uk-navbar-container uk-flex-wrap" data-uk-navbar>
        <div className="uk-flex-between uk-margin-remove uk-width-1-1@s" data-uk-grid>
            <img className="logo" src={logo} alt=""/>
          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle"><span className="uk-margin-small-right">Search </span><Icon name='search' /></a>
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
            <li className="uk-active"><a className="uk-text-capitalize"><Icon name='home' size='large' />Home</a></li>
            <li><a className="uk-text-capitalize">Patients Home</a></li>
            <li>
              <a>
                <Dropdown trigger={trigger} options={options} />
              </a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav ">
            <li>
              <a>
                <Dropdown trigger={trigger1} options={options1} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
