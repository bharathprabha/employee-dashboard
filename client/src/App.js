import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import EmployeeAdminPanel from "./components/EmployeeAdminPanel";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <EmployeeAdminPanel />
    </div>
  );
}

export default App;
