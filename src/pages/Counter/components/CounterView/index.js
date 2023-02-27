import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const CounterView = ({
  countValue,
  isEven,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  const { even, odd } = {
    even: "Number is even",
    odd: "Number is not even",
  };

  return (
    <div
      className={`${styles.wrapper} ${
        isEven ? styles.wrapper_even : styles.wrapper_odd
      }`}
    >
      <div>{countValue}</div>
      <div>{isEven ? even : odd}</div>
      <div>
        <Button text="-" handleClick={handleDecrement} styles={styles.btn} />
        <Button text="Reset" handleClick={handleReset} styles={styles.btn} />
        <Button text="+" handleClick={handleIncrement} styles={styles.btn} />
      </div>
    </div>
  );
};
CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};
export default CounterView;
