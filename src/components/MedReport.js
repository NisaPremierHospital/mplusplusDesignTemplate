import React, { Component } from 'react';
import {TextField} from "@material-ui/core/es/index";
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    return (
      <div>
        <form className={`uk-child-width-1-4@s uk-width-4-5@m ${classes.container}`} noValidate data-uk-grid>
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
        <p className="uk-h1">Welcome to Out Patient Encounters</p>
      </div>
    );
  }
}


MedReport.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(this.styles)(MedReport);
