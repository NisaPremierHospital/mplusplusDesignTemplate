import React, { Component } from 'react';
import Navbar from "./Navbar";
// import './App.css';
import { Dropdown } from 'semantic-ui-react';
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';


class SelectPatient extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dob: ''
    };
  };
  
  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  
  
  dataOptions = [
    { key: 'johnsheldon', value: 'johnsheldon', flag: 'johnsheldon', text: 'John Sheldon' },{ key: 'katefinay', value: 'katefinay', flag: 'katefinay', text: 'Kate Finay' },{ key: 'johnbrown', value: 'johnbrown', flag: 'johnbrown', text: 'John Brown' }
  ];
  dataOptions2 = [
    { key: 'johnsheldon', value: 'johnsheldon', flag: 'johnsheldon', text: 'John Sheldon' },{ key: 'katefinay', value: 'katefinay', flag: 'katefinay', text: 'Kate Finay' },{ key: 'johnbrown', value: 'johnbrown', flag: 'johnbrown', text: 'John Brown' }
  ];
  render() {
    return (
      <section className="uk-width-1-1@s">
        <Navbar/>
        <div className="uk-section container uk-padding uk-padding-remove-horizontal">
          <form>
            <h2 className="uk-heading-primary">Find Patient</h2>
            <div className="uk-margin-small">
              <div className="uk-form-controls">
                <input className="uk-input" id="search" type="text" placeholder="Search for Patient..."/>
              </div>
            </div>
            <div className="uk-margin-small">
              <input type="submit" className="uk-button uk-button-def" value="search"/>
            </div>
          </form>
          <form>
            <h2 className="uk-heading-primary">Create Patient</h2>
            <div className="uk-margin-small">
              <label className="uk-form-label" htmlFor="create">Pre-registered Patient</label>
              <Dropdown id="create" placeholder='Search For Existing Patient' fluid search selection options={this.dataOptions} />
            </div>
            <div className="uk-margin-small">
              <label className="uk-form-label" htmlFor="fname">First Name</label>
              <div className="uk-form-controls">
                <input className="uk-input" id="fname" type="text" placeholder="First Name"/>
              </div>
            </div>
            <div className="uk-margin-small">
              <label className="uk-form-label" htmlFor="lname">Last Name</label>
              <div className="uk-form-controls">
                <input className="uk-input" id="lname" type="text" placeholder="Last Name"/>
              </div>
            </div>
            <div className="uk-margin-small">
              <label className="uk-form-label" htmlFor="search">Date of Birth</label>
              <div className="uk-form-controls">
  
                <DateTimeInput
                  name="dob"
                  placeholder="Date Of Birth"
                  value={this.state.dob}
                  iconPosition="left"
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="uk-margin-small">
              <input type="submit" className="uk-button uk-button-def" value="create"/>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SelectPatient;
