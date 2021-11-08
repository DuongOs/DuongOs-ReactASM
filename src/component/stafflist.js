import React, { useState } from "react";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import dateFormat from "dateformat";

// const staffs_a = STAFFS;

function StaffList() {
  const [SelectedStaff, setSelectedStaff] = useState({});
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
        <div onClick={() => handleClick(staff)}>{staff.name}</div>
      </td>
    ));

  const StaffInfo = () => (
    <div>
      <h2>Họ và tên: {SelectedStaff.name}</h2>
      <p>
        Ngày sinh:
        {dateFormat(SelectedStaff.doB, "dd/mm/yyyy")}
        <br />
        Ngày vào công ty: 
        {dateFormat(SelectedStaff.startDate, "dd/mm/yyyy")}
        <br />
        Phòng ban:
        {/* {SelectedStaff.department} */}
        <br />
        Số ngày nghỉ còn lại: 
        {SelectedStaff.annualLeave}
        <br />
        Số ngày đã làm thêm: 
        {SelectedStaff.overTime}
        <br />
      </p>
    </div>
  );

  return (
    <div className="container-fluid">
      <table>
        <tbody>
          <tr className="row">
            <List />
          </tr>
        </tbody>
      </table>
      <StaffInfo />
    </div>
  );
}
export default StaffList;
