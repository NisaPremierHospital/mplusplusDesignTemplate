import React, { Component } from 'react';
import Logo from '../img/m++.png';
import { Icon } from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <header className="header uk-background-muted">
        <div className="uk-card uk-card-large uk-card-default uk-position-center uk-card-hover uk-width-1-2@s">
          <img className="Logo" src={Logo} alt=""/>
          <div className="uk-card-body uk-margin-remove uk-flex-middle uk-flex-wrap uk-grid-collapse uk-child-width-1-1@l uk-flex-center"
               data-uk-grid>
            {/*<img src={Logo} className="uk-logo" data-uk-img alt=""/>*/}
            <h1 className="uk-card-title uk-text-center uk-display-inline-block uk-margin-bottom">Login</h1>
            <form className="uk-text-center uk-padding-remove">
              <div className="uk-margin">
                <label htmlFor="username">Username</label>
                <input id="username" className="uk-input" type="text" placeholder="Username"/>
              </div>
              <div className="uk-margin">
                <label htmlFor="password">Password</label>
                <input id="password" className="uk-input" type="text" placeholder="Password"/>
              </div>
              <input name="button" type="submit" className="uk-button uk-button-def" value="Log In"/>
            </form>
          </div>
        </div>
        <footer className="uk-position-bottom-center uk-dark">
          <h4 className="uk-text-bold">&copy;M++ 2018</h4>
        </footer>
      </header>
    )
  }
}

export default Login;
