import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const Home = () => {
    //Some Api calls
    navigate  
  };

  return (
    <nav>
      <h3>Crud App</h3>
      <div className="navbar">
        <ul>
          <li onClick={Home}>CreateUsers</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
