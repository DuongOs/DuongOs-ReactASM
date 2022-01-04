import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function DeptStaff(props) {
  console.log(`props`, props);
  const staffs = props.staffs;

  function List() {
    return staffs.map((staff) => (
        <div
          className="text-wrap fw-bolder col-6 col-md-4 col-lg-2 border-radisus mb-1"
          key={staff.id}
        >
          <Card>
            <Link to={`/nhan-vien/${staff.id}`}>
              <CardImg width="100%" src={staff.image} alt={staff.name} />
              <CardTitle className={"d-flex justify-content-center"}>
                {staff.name}
              </CardTitle>
            </Link>
          </Card>
        </div>
    ));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/phong-ban">Phòng ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staffs[0].department.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row m-1">
              Số lượng nhân viên: {staffs.length}
          </div>
      <div className="row">
        <List staffs={staffs} />
      </div>
    </div>
  );
}
export default DeptStaff;
