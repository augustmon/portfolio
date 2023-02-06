import React from "react";
import LargeLink from "../../components/LargeLink/LargeLink";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home--column">
        <LargeLink to="/resume"> RESUME </LargeLink>
        <LargeLink to="/portfolio"> PORTFOLIO </LargeLink>
      </div>
      <footer className="Home--text">
        <p>This website is a learning project.</p>
        <p>Made with React and NodeJS.</p>
      </footer>
    </div>
  );
}
