import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import homeLogo from "./../../icons/ic_round-house.svg";

export default function Navbar() {
  const menuItems = ["resume", "portfolio"];
  const itemsToDisplay = menuItems.map((item) => (
    <NavLink
      className="Navbar--text-link"
      activeClassName="active"
      key={item}
      to={`/${item}`}
    >
      {item}
    </NavLink>
  ));

  return (
    <nav className="Navbar sticky">
      <NavLink className="Navbar--home-link" activeClassName="active" to="/">
        <img src={homeLogo} alt="Home icon" />
      </NavLink>

      {itemsToDisplay}
    </nav>
  );
}
