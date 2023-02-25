import React from "react";
import LargeLink from "../../components/LargeLink/LargeLink";
import "./Home.css";
import Footer from "./../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home--column">
        <LargeLink to="/resume"> RESUME </LargeLink>
        <LargeLink to="/portfolio"> PORTFOLIO </LargeLink>
      </div>
      <Footer
        textLines={[
          "This website is a learning project.",
          "Made with React and NodeJS.",
        ]}
      />
    </div>
  );
}
