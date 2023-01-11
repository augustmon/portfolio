import React from "react";
import LargeLink from "../../components/LargeLink/LargeLink";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <LargeLink to="/resume"> RESUME </LargeLink>
      <LargeLink to="/portfolio"> PORTFOLIO </LargeLink>
    </div>
  );
}
