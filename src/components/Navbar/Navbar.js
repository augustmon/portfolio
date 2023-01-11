import React from "react";
// import "./../../App.css";
import "./Navbar.css";
import { Link, Router } from "react-router-dom";

export default function Navbar() {
  const menuItems = ["portfolio", "resume"];
  const itemsToDisplay = menuItems.map((item) => (
    <Link key={item} to={`/${item}`}>
      {item}
    </Link>
  ));

  return <nav className="Navbar sticky">{itemsToDisplay}</nav>;
}
