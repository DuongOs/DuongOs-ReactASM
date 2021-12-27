import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function StaffList(props) {
  const [SelectedStaff, setSelectedStaff] = useState(false);
  const [GridClassName, setGridClassName] = useState(
    "text-wrap fw-bolder col-md-6 col-lg-4 border-radisus mb-1"
  );
  const staffs=props.staffs;

  console.log('staffs :>> ', {staffs});

  function handleClick(staffInfo) {
    setSelectedStaff(staffInfo);
  }

  function List() {
    console.log('staffsOnList :>> ', staffs);
    return staffs.map((staff) => (
      <div className="text-wrap fw-bolder col-6 col-md-4 col-lg-2 border-radisus mb-1" key={staff.id}>
        <Card onClick={() => handleClick(staff)}>
          <Link to={`/list/${staff.id}`}>
            <CardImg width="100%" src={staff.image} alt={staff.name} />
            <CardTitle className={"d-flex justify-content-center"}>{staff.name}</CardTitle>
          </Link>
        </Card>
      </div>
    ));
  }

  function Info({ params }) {
    if (!params) {
      return (
        <div/>
      );
    } else {
      return (
        <div className="col-sm-11 col-md-10 col-lg-10 m-auto">
          <div className="card text-white bg-primary mb-3 mt-3">
            <h2 className="card-title color-primary">
              Thông tin nhân viên: {params.name}
            </h2>
            <img src={params.image} alt={params.name} />
            <div className="card-body">
              <p className="card-text">
                <span>
                  Họ và tên: <span className="h5">{params.name}</span>
                </span>
                <br />
                Ngày sinh: <span> </span>
                {dateFormat(params.doB, "dd/mm/yyyy")}
                <br />
                Ngày vào công ty: <span> </span>
                {dateFormat(params.startDate, "dd/mm/yyyy")}
                <br />
                Phòng ban: <span> </span>
                {params.department.name}
                <br />
                Số ngày nghỉ còn lại: <span> </span>
                {SelectedStaff.annualLeave}
                <br />
                Số ngày đã làm thêm: <span> </span>
                {SelectedStaff.overTime}
                <br />
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="pb-5 pt-5 container-fluid">
      <div>
        <div>
          <div className="row">
            <List staffs={staffs}/>
          </div>
        </div>
      </div>
      <Info params={SelectedStaff} />
    </div>
  );
}
export default StaffList;
