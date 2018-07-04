import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import InfoCardReport from "./InfoCardReport";
import UIkit from 'uikit';
import ModalPop from "./ModalPop";
import Modals from '../Data/Modals'


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
      ],
      modal:[],
      modalState: "closed",
      modalId: "none"
    }
  }
  
  modals = Modals;
  // modal = [];
  
  handleCardClick = (e) => {
    // console.log(e.currentTarget.getElementsByTagName('h3')[0].innerText);
    
    this.setState({
      modal: this.modals.filter(modal => {
              return  modal.title === e.currentTarget.getElementsByTagName('h3')[0].innerText
            }),
      modalState: "open",
      modalId: `${e.currentTarget.dataset.myId}`
  })
    // console.dir(e.currentTarget.dataset.myId);
  }
  
  clearModal = () => {
    this.setState({
      modalId: "none"
    })
    console.log("you successfully ran clearModal function!!!")
  }
  
  modals = [];
  
  componentDidMount() {
    this.modals = Modals;
    console.log(this.modals)
  }
  componentDidUpdate() {
    // console.log(this.state.modalId)
    // console.log(`${this.state.modalId}`);
    this.state.modalId !== "none" ? UIkit.modal(`${this.state.modalId}`).show(): "";
  }
  
  componentWillUnmount() {
    this.setState({
      modalId: "none"
    })
  }
  
  render() {
    if (this.state.modalId !== "none") {
      UIkit.modal(`${this.state.modalId}`);
      // UIkit.modal(`${this.state.modalId}`);
      // UIkit.modal.dialog('<p>UIkit dialog!</p>');
    }
    
    console.log(`${this.state.modalId}`);
    return (
      <header>
        <Navbar/>
        <section className="uk-section uk-grid-small container uk-padding uk-padding-remove-horizontal uk-section-default" data-uk-grid  data-uk-height-match="target: > a > .uk-card; row: false">
          {this.state.cards.map((card, index) => {
            return <InfoCardReport handleCardLink = {this.handleCardClick} key={index} card={card}/>
          })}
        </section>
  
        {/*Modal*/}
        {
          this.state.modal.map((modal,index) => {
            return <ModalPop clearModal={this.clearModal} key={index} modal={modal}/>
          })
        }
        {/*Modal*/}
      </header>
    );
  }
}

export default Report;
