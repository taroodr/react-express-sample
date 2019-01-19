import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';
import EmployeeNew from './EmployeeNew';
import EmployeeEdit from './EmployeeEdit';

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">employee</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={EmployeeList} />
          <Route exact path='/employees/:id([0-9]+)' component={EmployeeDetail} />
          <Route exact path="/employees/new" component={EmployeeNew} />
          <Route exact path="/employees/:id([0-9]+)/edit" component={EmployeeEdit} />
          <Link to="/employees/new">New</Link>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}


// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <ExpressSampleApp />,            // Appをレンダリングする
  document.getElementById('root')  // id=root要素に対してレンダリングする
);