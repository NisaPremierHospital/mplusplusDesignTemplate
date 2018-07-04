import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from "react-router-dom";
// import './App.css';

class ModalPop extends Component {
  render() {
    return (
      <div id={this.props.modal.id} className="uk-modal-full" data-uk-modal="bg-close: false">
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button onClick={this.props.clearModal} className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
          <h3 className="uk-heading-primary">{this.props.modal.title}</h3>
          {this.props.modal.body}
        </div>
      </div>
    );
  }
}

export default ModalPop;
