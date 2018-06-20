import React, { Component } from 'react';
import Navbar from "./Navbar";
// import logo from './logo.svg';
// import './App.css';
import Avatar from '../img/user.png'
import {Icon, Label, Menu} from 'semantic-ui-react'
// import { Tab } from 'semantic-ui-react'
import InPatientNotes from "./InPatientNotes";
import OutPatientEncounters from "./OutPatientEncounters";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NursesObservations from "./NursesObservations";
import FluidChart from "./FluidChart";
import VitalSigns from "./VitalSigns";
import MedReport from "./MedReport";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
class PatientProfile extends Component {
  state = {
  value: 0,
};
  
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
  
    return (
      <header>
        <Navbar/>
        <section className="container uk-card uk-box-shadow-medium uk-margin-small-top">
            <div className="uk-grid-collapse patient uk-padding-small uk-margin-remove border-bottom" data-uk-grid data-uk-height-match="target: > div ; row: false" data-uk-sticky="top: #nav">
              <div className="uk-width-1-6@s imgHolder">
                {/*<img src={Avatar} alt=""/>*/}<Icon size='massive' name='user circle' />
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
            <div className="uk-child-width-1-2@s uk-grid-collapse info" data-uk-grid>
              <p className="divider"><span className="uk-text-bold divided">Reason</span><span className="uk-margin-small-left uk-margin-small-right">For Labour & Delivery</span></p>
              <p className="divider"><span className="uk-text-bold divided">Admitted On</span><span className="uk-margin-small-left uk-margin-small-right">16th, Aug 2017 07:26am</span></p>
              <p className="divider"><span className="uk-text-bold divided">Anticipated Discharge</span><span className="uk-margin-small-left uk-margin-small-right">17/08/2017</span></p>
              <p className="divider"><span className="uk-text-bold divided">Ward</span><span className="uk-margin-small-left uk-margin-small-right">NIGER [EXCLUSIVE]</span></p>
              <p className="divider"><span className="uk-text-bold divided">Bed/Room</span><span className="uk-margin-small-left uk-margin-small-right">Exclusive Bed III/EXCLUSIVE RM 3</span></p>
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
          {/*<Tab panes={panes}/>*/}
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Clinical Tasks" />
                <Tab label="InPatient Notes" />
                <Tab label="Out Patient Encounters" />
                <Tab label="Nurses Observations" />
                <Tab label="Fluid Chart" />
                <Tab label="Vital Signs" />
                <Tab label="Regimens" />
              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><MedReport/></TabContainer>}
            {value === 1 && <TabContainer><InPatientNotes/></TabContainer>}
            {value === 2 && <TabContainer><OutPatientEncounters/></TabContainer>}
            {value === 3 && <TabContainer><NursesObservations/></TabContainer>}
            {value === 4 && <TabContainer><FluidChart/></TabContainer>}
            {value === 5 && <TabContainer><VitalSigns/></TabContainer>}
            {value === 6 && <TabContainer>Item Seven</TabContainer>}
          </div>
        </section>
      </header>
    );
  }
}
PatientProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientProfile);
