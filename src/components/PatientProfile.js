import React, { Component } from 'react';
import Navbar from "./Navbar";
// import logo from './logo.svg';
// import './App.css';
import Avatar from '../img/user.png'
import {Icon, Label, Menu} from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import InPatientNotes from "./InPatientNotes";
import ClinicalTasks from "./ClinicalTasks";
import OutPatientEncounters from "./OutPatientEncounters";

const panes = [
  { menuItem: 'Clinical Tasks', render: () => <Tab.Pane><ClinicalTasks/></Tab.Pane> },
  { menuItem: 'InPatient Notes', render: () => <Tab.Pane><InPatientNotes/></Tab.Pane> },
  { menuItem: 'Out Patient Encounters', render: () => <Tab.Pane><OutPatientEncounters/></Tab.Pane> },
]

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
          <div className="uk-padding">
            <div className="uk-child-width-auto uk-grid-collapse info" data-uk-grid>
              <p className="divider"><span className="uk-text-bold divided">Reason</span><span className="uk-margin-small-left uk-margin-small-right">For Labour & Delivery</span></p>
              <p className="divider"><span className="uk-text-bold divided">Admitted On</span><span className="uk-margin-small-left uk-margin-small-right">16th, Aug 2017 07:26am</span></p>
              <p className="divider"><span className="uk-text-bold divided">Anticipated Discharge</span><span className="uk-margin-small-left uk-margin-small-right">17/08/2017</span></p>
              <p className="divider"><span className="uk-text-bold divided">Ward</span><span className="uk-margin-small-left uk-margin-small-right">NIGER [EXCLUSIVE]</span></p>
              <p className="divider"><span className="uk-text-bold divided">Bed/Room</span><span className="uk-margin-small-left uk-margin-small-right">Exclusive Bed III/EXCLUSIVE RM 3</span></p>
            </div>
            <div className="uk-child-width-auto uk-grid-collapse info" data-uk-grid>
              <p className="divider"><span className="uk-text-bold divided">Sex</span><span className="uk-margin-small-left uk-margin-small-right">Female</span></p>
              <p className="divider"><span className="uk-text-bold divided">Admitted On</span><span className="uk-margin-small-left uk-margin-small-right">27 Apr, 1992 (25 years)</span></p>
              <p className="divider"><span className="uk-text-bold divided">Insurance Status</span><span className="uk-margin-small-left uk-margin-small-right">PRIVATE [OLD](SELF)</span></p>
              <p className="divider"><span className="uk-text-bold divided">Admitted</span><span className="uk-margin-small-left uk-margin-small-right">3 Time(s) [0 days Annual Cumm.]</span></p>
              <p className="divider"><span className="uk-text-bold divided">Bed/Room</span><span className="uk-margin-small-left uk-margin-small-right">Exclusive Bed III/EXCLUSIVE RM 3</span></p>
              <p className="divider"><span className="uk-text-bold divided">Last Vitals</span><span className="uk-margin-small-left uk-margin-small-right">...</span></p>
            </div>
            <div className="uk-child-width-auto uk-grid-collapse info" data-uk-grid>
              <a className="divider uk-link-dec"><Icon name='book' /><span className="uk-margin-small-left uk-text-bold divided">More Details...</span></a>
              <a className="divider uk-link-dec"><Icon name='edit' /><span className="uk-margin-small-left uk-text-bold divided">Update Details</span></a>
              <a className="divider uk-link-dec"><Icon name='exclamation circle' /><span className="uk-margin-small-left uk-text-bold divided">Notification Preference</span></a>
            </div>
          </div>
          <Tab panes={panes}/>
        </section>
      </header>
    );
  }
}

export default PatientProfile;
