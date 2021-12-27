import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './HeaderComponent';
import StaffList from './stafflist';
import Footer from './FooterComponent'
import { STAFFS } from "../shared/staffs";

  const Main = () => {
    const [Staffs] = useState(STAFFS)
    return (
      <div className="container bg-gradient">
        <Header/>
        <StaffList staffs={Staffs}/>
        <Footer/>
      </div>
    );
  }

export default Main;