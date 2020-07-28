import React from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployeForm from "./AddEmployeForm";
import { ContextEmployeeProvider } from "../context/EmployeeState";

export default function EmployeeAdminPanel() {
  return (
    <ContextEmployeeProvider>
      
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <EmployeeTable />
          </div>
          <div className="col-sm-4">
            <AddEmployeForm />
          </div>
        </div>
      </div>
    </ContextEmployeeProvider>
  );
}
// hello pls stop