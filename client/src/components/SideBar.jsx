import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side_bar col-sm-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee-detail">Employee detail</Link>
        </li>
        <li>
          <Link to="/add-employee">Employee detail</Link>
        </li>
      </ul>
    </div>
  );
}
