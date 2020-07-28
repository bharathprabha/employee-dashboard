import React, { useState, useContext } from "react";
import EmployeeDetail from "./EmployeeDetail";
import { EmployeeContext } from "../context/EmployeeState";

export default function EmployeeTable() {
  const { Employees } = useContext(EmployeeContext);
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S. no</th>
            <th scope="col">Full name</th>
            <th scope="col">Email</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map((Employee) => (
            <EmployeeDetail key={Employee.id} Employee={Employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
