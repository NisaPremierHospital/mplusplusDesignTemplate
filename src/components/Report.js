import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import InfoCardReport from "./InfoCardReport";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 1, link: '#regmod', icon: 'folder open', title: 'Registration', width: 'uk-width-1-3@m', desc: 'Register' +
          ' Patient' +
          ' Record or Search for existing patients'},
        {id: 2, link: '#consultmod', icon: 'user doctor', title: 'Consultation', width: 'uk-width-1-3@m', desc: 'Get' +
          ' information from' +
          ' doctors or assigned representatives'},
        {id: 3, link: '#addismod', icon: 'heartbeat', title: 'Admissions & Discharge', width: 'uk-width-1-3@m', desc: 'Messages and Notifications to patients'},
        {id: 4, link: '#immunemod', icon: 'eye dropper', title: 'Immunization', width: 'uk-width-1-3@m', desc: 'Schedule' +
          ' patient for appointment and other events'},
        {id: 5, link: '#labmod', icon: 'lab', title: 'Laboratory', width: 'uk-width-1-3@m', desc: 'Laboratory' +
          ' Requests/Results'},
        {id: 6, link: '#pharmmod', icon: 'pills', title: 'Pharmacy', width: 'uk-width-1-3@m', desc: 'Drug Prescriptions for' +
          ' Patients'},
        {id: 7, link: '#theatremod', icon: 'medkit', title: 'Theatre', width: 'uk-width-1-3@m', desc: 'Patients Radiological' +
          ' Documents'},
        {id: 8, link: '#waitmod', icon: 'wait', title: 'Waiting Time', width: 'uk-width-1-3@m', desc: 'Patients Procedures'},
        {id: 9, link: '#radiomod', icon: 'thermometer empty', title: 'Radiology', width: 'uk-width-1-3@m', desc: 'Manage' +
          ' Patients admissions/discharge'}
      ]
    }
  }
  
  render() {
    return (
      <header>
        <Navbar/>
        <section className="uk-section uk-grid-small container uk-padding uk-padding-remove-horizontal uk-section-default" data-uk-grid  data-uk-height-match="target: > a > .uk-card; row: false">
          {this.state.cards.map((card, index) => {
            return <InfoCardReport key={index} card={card}/>
          })}
        </section>
  
        {/*Modal for Registration*/}
        <div id="regmod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Registration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Registration*/}
        
        {/*Modal for Consultation*/}
        <div id="consultmod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Consultation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Consultation*/}
        
        {/*Modal for Admission & Discharge*/}
        <div id="addismod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Admission & Discharge</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Admission & Discharge*/}
        
        {/*Modal for Immunization*/}
        <div id="immunemod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Immunization</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Immunization*/}
        
        {/*Modal for Laboratory*/}
        <div id="labmod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Laboratory</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Laboratory*/}
        
        {/*Modal for Pharmacy*/}
        <div id="pharmmod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Pharmacy</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Pharmacy*/}
        
        {/*Modal for Theatre*/}
        <div id="theatremod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Theatre</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Theatre*/}
        
        {/*Modal for Waiting Time*/}
        <div id="waitmod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Waiting Time</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Waiting Time*/}
        
        {/*Modal for Radiology*/}
        <div id="radiomod" className="uk-flex-middle" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <h3 className="uk-heading-primary">Radiology</h3>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
    
          </div>
        </div>
        {/*Modal for Radiology*/}
      </header>
    );
  }
}

export default Report;
