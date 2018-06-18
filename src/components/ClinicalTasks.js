import React, { Component } from 'react';
import ReactTable from "react-table";
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';

class ClinicalTasks extends Component {
    render() {
      const data = [
        {
          task: '2015/11/11',
          set_by: 'test document',
          last_finding: 'innorom',
          last_time_attended: 'innorom',
          task_state: 'Previous Task'
        },
        {
          task: '2015/11/11',
          set_by: 'test document',
          last_finding: 'innorom',
          last_time_attended: 'innorom',
          task_state: 'Done Task'
        }
      ];
      const columns = [{
        Header: 'Task State',
        accessor: 'task_state' // String-based value accessors!0
      },{
        Header: 'Task',
        accessor: 'task' // String-based value accessors!0
      }, {
        Header: 'Set By',
        accessor: 'set_by',
        maxWidth: 200 // Custom value accessors!
      }, {
        Header: 'Last Finding', // Custom header components!
        accessor: 'last_finding'
      }, {
        Header: 'Last Time Attended', // Custom header components!
        accessor: 'last_time_attended',
        maxWidth: 200
      }];
    
      return (
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          noDataText="No Clinical Tasks!"
          pivotBy={['set_by', 'task_state']}
        />);
    }
}

export default ClinicalTasks;
