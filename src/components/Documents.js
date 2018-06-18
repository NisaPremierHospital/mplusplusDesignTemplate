import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import ReactTable from 'react-table';
import Navbar from "./Navbar";
import "react-table/react-table.css";
import {Label, Message} from "semantic-ui-react";

class Documents extends Component {
  render() {
    const data = [
      {
      date: '2015/11/11',
      category: 'N/A',
      name: 'test document',
      patient: 'JUSTICE NUHU ADI',
    },{
      date: '2015/11/11',
      category: 'N/A',
      name: 'test document',
      patient: 'JUSTICE NUHU ADI',
    }
    ];
  
    const columns = [{
      Header: 'Date',
      accessor: 'date' // String-based value accessors!
    }, {
      Header: 'Category',
      accessor: 'category'
    }, {
      Header: 'Name',
      accessor: 'name' // Custom value accessors!
    }, {
      Header: 'Patient', // Custom header components!
      accessor: 'patient'
    }];
  
    return (
    <header>
            <Navbar/>
            <section className="container uk-card uk-box-shadow-medium uk-margin-small-top" id="documents">
              <button className="uk-button uk-button-def uk-margin-bottom">New Attachment</button>
              <ReactTable
                data={data}
                showPagination={false}
                columns={columns}
                noDataText="No InPatient Note on this PersonDocuments Available!"
              />
            </section>)
    </header>
    )
  }
}

export default Documents;
