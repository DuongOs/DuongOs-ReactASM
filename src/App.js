import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffList from './component/stafflist';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar className="bg-primary text-light shadow-sm p-3 mb-5 bg-body">
          <NavbarBrand>
            <h1>Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <StaffList/>
      </div>
    );
  }
}

export default App;