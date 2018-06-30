import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {TextField} from "@material-ui/core/es/index";
import ReactTable from "react-table";

class FluidChart extends Component {
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
    const data = [];
  
    const columns = [];
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
            <button className="uk-button uk-button-primary">Apply</button>
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


FluidChart.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(this.styles)(FluidChart);
