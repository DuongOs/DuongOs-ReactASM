import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import { Button } from "reactstrap";

function StaffList() {
  const [SelectedStaff, setSelectedStaff] = useState(false);
  const [staffs] = useState(STAFFS);

  const handleClick = (staffInfo) => {
    setSelectedStaff(staffInfo);
  };

  const List = () =>
    staffs.map((staff) => (
      <td
        className="fw-bolder col-sm-12 col-md-6 col-lg-4 border-radisus"
        key={staff.id}
      >
        <Button onClick={() => handleClick(staff)} width="200" className="">
          <img src={staff.image} alt="Image" width="50" height="50" />
          <span className="h3">
            <span> </span>
            {staff.name}
          </span>
        </Button>
      </td>
    ));

  function Info({ params }) {
    if (!params) {
      return <p>Nhấn vào tên nhân viên để hiển thị thông tin</p>;
    } else {
      return (
        <div className="col-sm-11 col-md-10 col-lg-10 m-auto">
          <div className="card mt-3 mb-3">
            <h2 className="card-title">Thông tin nhân viên: {params.name}</h2>
            <img src={params.image} className="" />
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
              <button type="button" className="btn btn-outline-primary mr-1">Giao việc</button>
              <button type="button" className="btn btn-outline-warning ml-1">Cập nhật thông tin</button>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="pb-5 pt-5 container-fluid">
      <table >
        <tbody>
          <tr className="row">
            <List />
          </tr>
        </tbody>
      </table>
      <Info params={SelectedStaff}/>
    </div>
  );
}
export default StaffList;
