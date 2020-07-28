import React from "react";
import "./Form.css";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeState";

export default function AddEmployeForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { NoEmployee, addEmployee } = useContext(EmployeeContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const Employee = {
      id: NoEmployee + 1,
      name,
      email,
    };
    addEmployee(Employee);
  };

  return (
    <form className="form-style">
      <label>
        Name:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          name="name"
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          name="name"
        />
      </label>
      <button onClick={onSubmit} className="btn btn-success btn-sm">
        Add Employee
      </button>
    </form>
  );
}
