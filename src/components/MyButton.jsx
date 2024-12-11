// ButtonComponent.jsx
import PropTypes from "prop-types";

const MyButton = ({ name, color, onClick, textColor = "black" }) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full"
      style={{ backgroundColor: color, color: textColor }}
    >
      {name}
    </button>
  );
};

MyButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default MyButton;
