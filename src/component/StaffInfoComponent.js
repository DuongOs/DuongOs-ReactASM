import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Info = (staff) => {
  console.log("staff detail", staff)
  if (!staff) {
    return <div />;
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
          <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/nhan-vien">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{staff.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <img className="col-12" src={staff.staff.image} alt={staff.staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <p>
              <h5>
                Họ và tên: <span>{staff.staff.name}</span>
              </h5>
              <br />
              Ngày sinh: <span> </span>
              {dateFormat(staff.staff.doB, "dd/mm/yyyy")}
              <br />
              Ngày vào công ty: <span> </span>
              {dateFormat(staff.staff.startDate, "dd/mm/yyyy")}
              <br />
              Phòng ban: <span> </span>
              {staff.staff.department.name}
              <br />
              Số ngày nghỉ còn lại: <span> </span>
              {staff.staff.annualLeave}
              <br />
              Số ngày đã làm thêm: <span> </span>
              {staff.staff.overTime}
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const StaffInfo = (props) => {
  console.log("prop", props)
    if (props.staff !== null) {
      return (
        <Info staff={props.staff}/>
      );
    }  
}

export default StaffInfo;
