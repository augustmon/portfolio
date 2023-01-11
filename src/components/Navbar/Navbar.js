import React from "react";
// import "./../../App.css";
import "./Navbar.css";
import { Link, Router } from "react-router-dom";
import homeLogo from "./../../icons/ic_round-house.svg";

export default function Navbar() {
  const menuItems = ["portfolio", "resume"];
  const itemsToDisplay = menuItems.map((item) => (
    <Link key={item} to={`/${item}`}>
      {item}
    </Link>
  ));

  return (
    <nav className="Navbar sticky">
      <Link to="/">
        <img src={homeLogo} alt="Home icon" />
      </Link>
      {itemsToDisplay}
      <div className="nav-elements"></div>
    </nav>
  );
}
