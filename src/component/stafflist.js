import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";

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
        <div onClick={() => handleClick(staff)}>{staff.name}</div>
      </td>
    ));

  function Info({ params }) {
    if (!params) {
      return <p>Nhấn vào tên nhân viên để hiển thị thông tin</p>;
    } else {
      return (
        <div>
          <h2>Họ và tên: {params.name}</h2>
          <img src={params.image} />
          <p>
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
      );
    }
  }

  return (
    <div className="container-fluid">
      <table>
        <tbody>
          <tr className="row">
            <List />
          </tr>
        </tbody>
      </table>
      <Info params={SelectedStaff} />
    </div>
  );
}
export default StaffList;
