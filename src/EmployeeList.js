import React from 'react';
import { Link } from 'react-router-dom';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.loadEmployeeList = this.loadEmployeeList.bind(this);
  }

  loadEmployeeList() {
    return fetch('http://localhost:3000/_api/employees')
      .then((response) => response.json())
      .then((responseJson) => 
        this.setState({
          employees: responseJson.employees,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.loadEmployeeList();
  }

  render() {
    const employee_list = this.state.employees.map((employee) =>
      <tr key={`EmployeeList-${employee.id}`}>
        <td>
          <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
        </td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.gender}</td>
        <td>
          <Link to={`/employees/${employee.id}/edit`}><button>Edit</button></Link>
          <form action={'/_api/employees/' + employee.id + '?_method=DELETE'} method='post'>
            { /* cf. https://qiita.com/ozhaan/items/c1e394226c1d5acb7f0e */}
            <input name="_method" type="hidden" value="DELETE" readOnly />
            <input name="id" type="hidden" value={employee.id} readOnly />
            <input type="submit" value="Delete" />
          </form>
        </td>
      </tr>
    );

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee_list}
        </tbody>
      </table>
    );
  }
  
}
