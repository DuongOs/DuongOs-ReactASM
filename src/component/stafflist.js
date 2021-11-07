import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";

const staffs = STAFFS;

function StaffList() {
  const [Info, setInfo] = useState(0);
  const HandleInfo = () => (
      setInfo(Info+1)
  )
  const List = () =>
    staffs.map((nhanVien) => (
      <td
        onClick={HandleInfo}
        className=" fw-bolder col-sm-12 col-md-6 col-lg-4 border-radius"
        key={nhanVien.id}
      >
        {nhanVien.name}
      </td>
    ));

  return (
    <div className="container-fluid">
      <table>
        <tbody>
          <tr class="row">
            <List />
          </tr>
        </tbody>
      </table>
      <p>{Info}</p>
    </div>
  );
}
export default StaffList;
