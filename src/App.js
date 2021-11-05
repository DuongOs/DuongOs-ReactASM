import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar className="bg-primary text-light shadow-sm p-3 mb-5 bg-body rounded">
          <NavbarBrand>
            Ứng dụng quản lý nhân sự v1.0
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default App;