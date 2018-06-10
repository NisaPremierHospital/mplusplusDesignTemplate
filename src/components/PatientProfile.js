import React, { Component } from 'react';
import Navbar from "./Navbar";
// import logo from './logo.svg';
// import './App.css';
import Avatar from '../img/user.png'
import {Icon, Label, Menu} from 'semantic-ui-react'

class PatientProfile extends Component {
  render() {
    return (
      <header>
        <Navbar/>
        <section className="container uk-card uk-box-shadow-medium uk-margin-small-top">
            <div className="uk-grid-collapse patient uk-padding-small uk-margin-remove border-bottom" data-uk-grid data-uk-height-match="target: > div ; row: false" data-uk-sticky="top: #nav">
              <div className="uk-width-1-6@s imgHolder">
                <img src={Avatar} alt=""/>
              </div>
              <div className="uk-width-5-6@s uk-flex uk-flex-wrap uk-flex-middle uk-child-width-1-1@s">
                <div className="uk-flex uk-flex-between">
                  <p className="uk-h3 uk-text-uppercase">Aef Badmus</p>
                  <div>
                    <Menu compact>
                      <Menu.Item as='a'>
                        <Icon color='blue' name='book' />
                        <Label color='blue' floating>
                          0
                        </Label>
                      </Menu.Item>
                      <Menu.Item as='a'>
                        <Icon color='orange' name='mail' />
                        <Label color='orange' floating>
                          0
                        </Label>
                      </Menu.Item>
                      <Menu.Item as='a'>
                        <Icon color='teal' name='newspaper outline' />
                      </Menu.Item>
                      <Menu.Item as='a'>
                        <Icon color='red' name='exclamation triangle' />
                        <Label color='red' floating>
                          0
                        </Label>
                      </Menu.Item>
                    </Menu>
                  </div>
                </div>
                <div><p className="uk-h5 uk-margin-remove"><Icon name='user' /> <span className="uk-text-primary uk-margin-small-right">01111110101110</span><span className="uk-margin-small-right">(61959)</span><span className="uk-badge uk-background-secondary">GRP2</span></p></div>
              </div>
            </div>
        </section>
      </header>
    );
  }
}

export default PatientProfile;
