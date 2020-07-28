import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="nav_bar navbar-light bg-light">
        <span className="navbar-brand mb-0 h2">Employee Admin Dashboard</span>

        <a href="#" className="navbar-brand mb-0">
          Add Employee
        </a>
      </nav>
    </div>
  );
}
