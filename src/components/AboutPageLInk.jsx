import { FaQuestion } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

function AboutPageLInk() {
  return (
    <div className="about-link">
      <Link to="/about" rel="noreferrer noopener">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutPageLInk;
