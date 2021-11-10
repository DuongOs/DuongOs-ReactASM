import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import { Button } from "reactstrap";

function StaffList() {
  const [SelectedStaff, setSelectedStaff] = useState(false);
  const [staffs] = useState(STAFFS);
  const [GridClassName, setGridClassName] = useState(
    "text-wrap fw-bolder col-md-6 col-lg-4 border-radisus mb-1"
  );

  function handleClick(staffInfo) {
    setSelectedStaff(staffInfo);
  }

  function GridChange() {

    function SetGridAuto() {
      setGridClassName("text-wrap fw-bolder col-auto border-radisus mb-1");
    }
    
    function SetGrid2() {
      setGridClassName("text-wrap fw-bolder col-6 border-radisus mb-1");
    }
    
    function SetGrid3() {
      setGridClassName("text-wrap fw-bolder col-4 border-radisus mb-1");
    }

    function SetGrid6() {
      setGridClassName("text-wrap fw-bolder col-2 border-radisus mb-1");
    }
    
    return (
      <div className="mr-1 d-none d-sm-block pb-3">
        <span className="text-primary">Đổi giao diện:  </span>
        <Button className="btn btn-outline-primary mr-1" onClick={SetGridAuto}>Auto</Button>
        <Button className="btn btn-outline-primary mr-1" onClick={SetGrid2}>2 cột</Button>
        <Button className="btn btn-outline-primary mr-1" onClick={SetGrid3}>3 cột</Button>
        <Button className="btn btn-outline-primary mr-1" onClick={SetGrid6}>6 cột</Button>
      </div>
    );
  }

  function List() {
    return staffs.map((staff) => (
      <div className={GridClassName} key={staff.id}>
        <Button onClick={() => handleClick(staff)} className="btn btn-outline-primary display-6">
          <img src={staff.image} alt={staff.image} width="50" height="50" />
          <span className="text-wrap display-6">
            <span> </span>
            {staff.name}
          </span>
        </Button>
      </div>
    ));
  }

  function Info({ params }) {
    if (!params) {
      return <p className="text-danger">Nhấn vào tên nhân viên để hiển thị thông tin</p>;
    } else {
      return (
        <div className="col-sm-11 col-md-10 col-lg-10 m-auto">
          <div className="card text-white bg-primary mb-3 mt-3">
            <h2 className="card-title color-primary">Thông tin nhân viên: {params.name}</h2>
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
        <GridChange id="GridChange" />
        <div>
          <div className="row">
            <List />
          </div>
        </div>
      </div>
      <Info params={SelectedStaff} />
    </div>
  );
}
export default StaffList;
