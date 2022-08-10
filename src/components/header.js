import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header>
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-700 dark:text-white">
          {text}
        </h1>
      </div>
    </header>
  );
}

//setting default props
Header.defaultProps = {
  text: "Student Rating",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
