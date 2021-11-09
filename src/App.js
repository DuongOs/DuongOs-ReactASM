import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffList from './component/stafflist';

class App extends Component {

  render() {
    return (
      <div className="container-fluid bg-secondary bg-gradient">
        <Navbar className="row">
          <NavbarBrand  className="col-12 bg-primary text-light shadow-sm p-3 mb-5 bg-body">
            <div className="col-12 h2">Ứng dụng quản lý nhân sự v1.0</div>
          </NavbarBrand>
        </Navbar>
        <StaffList/>
      </div>
    );
  }
}

export default App;