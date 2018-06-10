import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 1, link: '/', icon: 'search', title: 'Find/Create Patient', width: 'uk-width-1-3@m', desc: 'Create Patient Record or Search for existing patients'},
        {id: 2, link: '/', icon: 'book', title: 'Documents', width: 'uk-width-1-3@m', desc: 'Create/Attach Patient Document or Search/View existing documents'},
        {id: 3, link: '/', icon: 'mail', title: 'Messages', width: 'uk-width-1-3@m', desc: 'Messages and Notifications to patients'},
        {id: 4, link: '/', icon: 'calendar alternate outline', title: 'Appointments', width: 'uk-width-1-3@m', desc: 'Schedule patient for appointment and other events'},
        {id: 5, link: '/', icon: 'lab', title: 'Laboratory', width: 'uk-width-1-3@m', desc: 'Laboratory Requests/Results'},
        {id: 6, link: '/', icon: 'pills', title: 'Pharmacy', width: 'uk-width-1-3@m', desc: 'Drug Prescriptions for Patients'},
        {id: 7, link: '/', icon: 'image', title: 'Imaging', width: 'uk-width-1-3@m', desc: 'Patients Radiological Documents'},
        {id: 8, link: '/', icon: 'first aid', title: 'Procedures', width: 'uk-width-1-3@m', desc: 'Patients Procedures'},
        {id: 9, link: '/', icon: 'hospital outline', title: 'In-Patients Care', width: 'uk-width-1-3@m', desc: 'Manage Patients admissions/discharge'},
        {id: 10, link: '/', icon: 'tasks', title: 'O.P. Clinical Tasks', width: 'uk-width-1-3@m', desc: 'Clinical' +
          ' Tasks/Roundings for out-patients'},
        {id: 11, link: '/', icon: 'syringe', title: 'Vaccine & Immunization', width: 'uk-width-1-3@m', desc: 'Patients Vaccine Details'},
        {id: 12, link: '/', icon: 'linkify', title: 'Referrals', width: 'uk-width-1-3@m', desc: 'Manage entities' +
          ' that refer patients/requests to the clinic'},
        {id: 13, link: '/', icon: 'female', title: 'Antenatal Care', width: 'uk-width-1-3@m', desc: 'Nursing' +
          ' Mothers and infants'},
        {id: 14, link: '/', icon: 'video play', title: 'Labour Management', width: 'uk-width-1-3@m', desc: 'Puerperium, Labour Track Events'},
        {id: 15, link: '/', icon: 'users', title: 'Specialty Modules', width: 'uk-width-1-3@m', desc: 'Physiotherapy, IVF Clinic, Dentistry, ARV, Optometry'},
        {id: 16, link: '/', icon: 'shopping cart', title: 'Billing', width: 'uk-width-1-3@m', desc: 'Patients' +
          ' Medical Bills'},
        {id: 17, link: '/', icon: 'gift', title: 'Vouchers', width: 'uk-width-1-3@m', desc: 'Vouchers for Payments,' +
          ' discounts, refunds, ...'},
        {id: 18, link: '/', icon: 'bed', title: 'Death Certificates', width: 'uk-width-1-3@m', desc: 'Create or View' +
          ' Certification of Death of Patients'},
        {id: 19, link: '/', icon: 'user md', title: 'Medical Staff Directory', width: 'uk-width-1-3@m', desc: 'Find' +
          ' a Doctor, Nurse, Medical Staff'},
        {id: 20, link: '/', icon: 'list alternate outline', title: 'Medical Reports', width: 'uk-width-1-3@m', desc: 'Medical Report Requests'},
        {id: 21, link: '/', icon: 'chart bar outline', title: 'Reports', width: 'uk-width-1-3@m', desc: 'Reports' +
          ' and data'},
        {id: 22, link: '/', icon: 'lemon', title: 'Consumables', width: 'uk-width-1-3@m', desc: 'Patients' +
          ' Consumables Requests'},
        {id: 23, link: '/', icon: 'setting', title: 'Practice Management', width: 'uk-width-2-3@m', desc: 'Manage' +
          ' your hospital Configuration'},
      ]
    }
  }
  
  render() {
    return (
      <header>
        <Navbar/>
        <section className="uk-section uk-flex-center container uk-flex-stretch uk-padding uk-padding-remove-horizontal uk-section-default" data-uk-grid  data-uk-height-match="target: > a > .uk-card; row: false">
          {this.state.cards.map((card, index) => {
           return <InfoCard key={index} card={card}/>
          })}
        </section>
      </header>
    );
  }
}

export default Landing;
