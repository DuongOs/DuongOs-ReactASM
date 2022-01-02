import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

const Departments = (props) => {
  const departments = props.departments;
  function ShowDepartment() {
    console.log(`department`, departments);

    return departments.map((department) => (
      <div className="col-12 col-md-4 col-lg-3 m-1">
        <Link to={`/phong-ban/${department.id}`}>
          <Card key={department.id} className="p-1">
            <CardTitle>{department.name}</CardTitle>
            <CardBody>
              <CardText>
                Số lượng nhân viên: {department.numberOfStaff}
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <ShowDepartment />
      </div>
    </div>
  );
};

export default Departments;
