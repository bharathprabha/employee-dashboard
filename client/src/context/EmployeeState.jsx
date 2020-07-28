import React, { createContext, useState, useReducer } from "react";
import AddReducer from "./AddReducer";

const initialState = {
  Employees: [
    { id: 1, name: "bharath", email: "bharathemail" },
    { id: 2, name: "pradeep", email: "bharathemail" },
    { id: 3, name: "pabhakaran", email: "bharathemail" },
  ],
  error: null,
  loading: false,
};
export const EmployeeContext = createContext(initialState);

export const ContextEmployeeProvider = ({ children }) => {
  // const [Employee, setEmployee] = useState([
  //   { id: 1, name: "bharath", email: "bharathemail" },
  //   { id: 2, name: "pradeep", email: "bharathemail" },
  //   { id: 3, name: "pabhakaran", email: "bharathemail" },
  // ]);

  const [state, dispach] = useReducer(AddReducer, initialState);

  function deleteEmployee(id) {
    dispach({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  }

  function addEmployee(Employee) {
    dispach({
      type: "ADD_EMPLOYEE",
      payload: Employee,
    });
  }

  return (
    <EmployeeContext.Provider
      value={{
        Employees: state.Employees,
        NoEmployee: state.Employees.length,
        deleteEmployee,
        addEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
