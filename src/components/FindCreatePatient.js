import React, { Component } from 'react';
import Navbar from "./Navbar";

class Login extends Component {
  render() {
    return (
      <header className="header uk-background-muted">
        <Navbar/>
        <section className="uk-section uk-grid-small container uk-padding bgTrans uk-padding-remove-horizontal" data-uk-grid >
            <h1 className="uk-card-title uk-padding-remove-left uk-margin-remove uk-display-inline-block uk-margin-bottom">Find Patient</h1>
            <form className="uk-padding-remove uk-width-1-1@s uk-margin-bottom">
              <div className="uk-margin uk-width-1-1@s">
                <input id="username" className="uk-input" type="text" placeholder="Search for a Patient"/>
              </div>
              <input name="button" type="submit" className="uk-button uk-button-def uk-width-1-1@s" value="Search >"/>
            </form>
          
            <h1 className="uk-card-title uk-padding-remove-left uk-margin-remove uk-display-inline-block uk-margin-bottom">Create Patient</h1>
            <form className="uk-padding-remove uk-width-1-1@s">
              <div className="uk-margin uk-width-1-1@s">
                <label htmlFor="pre-reg">Pre-Registered Patient</label>
                <input id="pre-reg" className="uk-input" type="text" placeholder="Search for a self-registered Patient"/>
              </div>
              <div className="uk-margin uk-width-1-1@s">
                <label htmlFor="fname">First Name<sup className="uk-text-large col-dange">*</sup></label>
                <input id="fname" className="uk-input" type="text"/>
              </div>
              <div className="uk-margin uk-width-1-1@s">
                <label htmlFor="lname">Last Name<sup className="uk-text-large col-dange">*</sup></label>
                <input id="lname" className="uk-input" type="text"/>
              </div>
              <input name="button" type="submit" className="uk-button uk-button-def uk-width-1-1@s" value="Create >"/>
            </form>
        </section>
        <footer className="uk-position-bottom-center uk-dark">
          <h4 className="uk-text-bold">&copy;M++ 2018</h4>
        </footer>
      </header>
    )
  }
}

export default Login;
