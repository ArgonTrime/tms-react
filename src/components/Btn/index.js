import PropTypes from "prop-types";

const Btn = ({ text, handleClick, styleBtn }) => {
  return (
    <button onClick={handleClick} className={styleBtn}>
      {text}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  handlerClick: PropTypes.func,
  styleBtn: PropTypes.string,
};
export default Btn;
