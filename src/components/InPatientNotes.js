import React, { Component } from 'react';
import ReactTable from 'react-table';
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import "react-table/react-table.css";

class InPatientNotes extends Component {
  render() {
    const data = [
      {
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    },{
      date: '2015/11/11',
      note: 'test document',
      noted_by: 'innorom',
    }
    ];
    const columns = [{
      Header: 'Date',
      accessor: 'date' // String-based value accessors!
    }, {
      Header: 'Note',
      accessor: 'note' // Custom value accessors!
    }, {
      Header: 'Noted By', // Custom header components!
      accessor: 'noted_by'
    }];
  
    return (
      <ReactTable
        data={data}
        columns={columns}
        showPagination={false}
        noDataText="No InPatient Note on this Person!"
        pivotBy={['date', 'noted_by']}
      />);
  }
}

export default InPatientNotes;
