import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeState";

export default function EmployeeDetail(props) {
  const { deleteEmployee } = useContext(EmployeeContext);
  return (
    <tr>
      <th scope="row">1</th>
      <td>{props.Employee.name}</td>
      <td> {props.Employee.email} </td>
      <td>
        <button className="btn btn-primary btn-sm">Update</button>
      </td>
      <td>
        <button
          onClick={() => deleteEmployee(props.Employee.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
