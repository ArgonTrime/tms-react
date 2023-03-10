import PropTypes from "prop-types";

const Button = ({ text, styles, disabled, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string,
  disabled: PropTypes.bool,
  handlerClick: PropTypes.func,
};
export default Button;
