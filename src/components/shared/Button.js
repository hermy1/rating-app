import PropTypes from "prop-types";
function Button({ children, type, isDisabled }) {
  return (
    <div>
      <button
        className=" bg-indigo-600 hover:bg-indigo-700 text-white text-center text-base focus:outline-none font-semibold shadow-md py-2 px-4 mt-3 rounded disabled:opacity-50"
        type={type}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
