import PropTypes from "prop-types";

const Button = ({ text, handleClick, styles }) => {
  return (
    <button onClick={handleClick} className={styles}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handlerClick: PropTypes.func,
  styles: PropTypes.string,
};
export default Button;
