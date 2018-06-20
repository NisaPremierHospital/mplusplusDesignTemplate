import React, { Component } from 'react';
import {TextField} from "@material-ui/core/es/index";
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReactTable from "react-table";

class MedReport extends Component {
  styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });
  
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
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
    });
    
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ];
    const data = [{
      action: 'Action',
      date: '15/08/17 7:53pm',
      department: 'Obstetric & Gynaecology',
      friend: {
        specialization: 'Obstetrician[Consultant]',
        doctor: 'Dr. Henry Onyegbule',
      }
    },{
      action: 'Action',
      date: '14/08/17 2:07pm',
      department: 'Obstetric & Gynaecology',
      friend: {
        specialization: 'Obstetrician[Senior Consultant] Grace Daniyan',
        doctor: 'Manasoko Dr Daniyan',
      }
    }];
  
    const columns = [{
      Header: 'Action',
      accessor: 'action',
      maxWidth: 200,
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
        <form className={`uk-child-width-1-4@s uk-width-4-5@m uk-margin-medium-bottom ${classes.container}`} noValidate data-uk-grid>
          <div>
            <TextField
              id="from"
              type="date"
              defaultValue="0000-00-00"
              className={classes.textField}
              helperText="From"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <TextField
              id="to"
              type="date"
              defaultValue="0000-00-00"
              className={classes.textField}
              helperText="To"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <button className="uk-button uk-button-primary">View</button>
          </div>
          <div>
            <button className="uk-button uk-button-secondary">Download</button>
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


MedReport.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(this.styles)(MedReport);
