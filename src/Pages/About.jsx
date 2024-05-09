import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave a feedback </p>
        <p>
          Designed by
          <a href="https://tejudharanesh.github.io/portfolio/"> Teju </a>
        </p>
        <Link to="/" className="home">home</Link>
      </div>
    </Card>
  );
}

export default About;
