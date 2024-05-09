import React from "react";
import PropTypes from 'prop-types'


function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UIi",
};

Header.propsType = {
  text: PropTypes.string,
};

export default Header;
