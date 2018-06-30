import React, { Component } from 'react';
// import logo from './logo.svg';
import { Icon } from 'semantic-ui-react'
// import './App.css';

class InfoCardReport extends Component {
  render() {
    return (
      <a data-uk-toggle={this.props.card.link} className={`uk-link-reset uk-flex-stretch uk-height-1-1 ${this.props.card.width}`}>
        <div className="uk-card uk-text-center uk-card-default uk-box-shadow-hover-large uk-light uk-card-primary uk-card-small uk-card-body">
          <Icon name={this.props.card.icon} size='massive'/>
          <h3 className="uk-card-title uk-margin-small-bottom">{this.props.card.title}</h3>
          <p className='thinp uk-margin-small-top'>{this.props.card.desc}</p>
        </div>
      </a>
    );
  }
}

export default InfoCardReport;
