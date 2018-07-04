import React, { Component } from 'react';
import {TextField} from "@material-ui/core/es/index";
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import ReactTable from "react-table";
import { Dropdown } from 'semantic-ui-react'
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';
const dat = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

class MedReport extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: '',
      time: '',
      dateTimeFrom: '',
      dateTimeTo: '',
      datesRange: ''
    };
  }
  
  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  
  render() {
    const data = [{
      date: '15/08/17 7:53pm',
      department: 'Obstetric & Gynaecology',
      friend: {
        specialization: 'Obstetrician[Consultant]',
        doctor: 'Dr. Henry Onyegbule',
      }
    },{
      date: '14/08/17 2:07pm',
      department: 'Obstetric & Gynaecology',
      friend: {
        specialization: 'Obstetrician[Senior Consultant] Grace Daniyan',
        doctor: 'Manasoko Dr Daniyan',
      }
    }];
  
    const columns = [{
      Header: 'Date',
      accessor: 'date', // String-based value accessors!
      width: 200,
    },{
      Header: 'Department',
      accessor: 'department', // String-based value accessors!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Specialization',
      accessor: d => d.friend.specialization // Custom value accessors!
    }, {
      Header: props => <span>Doctor</span>, // Custom header components!
      accessor: 'friend.doctor'
    }];
    return (
      <div>
        <form className={`uk-child-width-1-4@s uk-width-1-1@m uk-margin-medium-bottom`} data-uk-grid>
          <div className="uk-width-1-2@m uk-child-width-1-1@s uk-child-width-1-2@m" data-uk-grid>
          <div className="uk-child-width-1-1@s">
              <DateTimeInput
                name="dateTimeFrom"
                placeholder="Date From"
                value={this.state.dateTimeFrom}
                iconPosition="left"
                onChange={this.handleChange} />
          </div>
          <div className="uk-child-width-1-1@s">
            <DateTimeInput
              name="dateTimeTo"
              placeholder="Date To"
              value={this.state.dateTimeTo}
              iconPosition="left"
              onChange={this.handleChange} />
          </div>
            <div className="uk-width-1-1@s min-50 uk-margin-small-top">
              <Dropdown placeholder='Skills' fluid multiple selection options={dat} />
            </div>
          </div>
          <div className="uk-width-1-2@s">
            <button className="uk-button uk-margin-small-left uk-button-primary">View</button>
            <button className="uk-button uk-margin-small-left uk-button-secondary">Download</button>
          </div>
        </form>
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}


export default MedReport;
