import React from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployeForm from "./AddEmployeForm";
import SideBar from "./SideBar";
import { ContextEmployeeProvider } from "../context/EmployeeState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function EmployeeAdminPanel() {
  return (
    <div className="fluid-container">
      <div className="row">
        <ContextEmployeeProvider>
          <Router>
            <SideBar />
            <Route exact path="/">
              hello
            </Route>
            <Route path="/employee-detail">
              <div className="col-sm-10">
                <EmployeeTable />
              </div>
            </Route>
            <Route path="/add-employee">
              <div className="col-sm-10">
                <AddEmployeForm />
              </div>
            </Route>
          </Router>
        </ContextEmployeeProvider>
      </div>
    </div>
  );
}
// hello pls stop
