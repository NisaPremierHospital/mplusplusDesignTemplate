import React, { Component } from 'react';
import ReactTable from "react-table";
import {Dropdown} from "semantic-ui-react";
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class VitalSigns extends Component {
  
  state = {
    anchorEl: null,
  };
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {
    const { anchorEl } = this.state;
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ];
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }];
  
    const columns = [{
      Header: 'Age',
      accessor: 'age',
      Cell: props => (
        <div>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className="success"
          >
            Action
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>View Details</MenuItem>
            <MenuItem onClick={this.handleClose}>Print</MenuItem>
            <MenuItem onClick={this.handleClose}>Refer</MenuItem>
          </Menu>
        </div>
      ) // Custom cell components!
    },{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];
  
    return (
      <ReactTable
        data={data}
        columns={columns}
      />
    );
  }
}

export default VitalSigns;
