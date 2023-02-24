import PropTypes from "prop-types";

import Btn from "../../../../components/Btn";

import styles from "./style.module.scss";

const CounterView = ({
  countValue,
  isEven,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  const [even, odd] = ["Number is even", "Number is not even"];

  return (
    <div
      className={`${styles.wrapper} ${
        isEven ? styles.wrapper_even : styles.wrapper_odd
      }`}
    >
      <div>{countValue}</div>
      <div>{isEven ? even : odd}</div>
      <div>
        <Btn text="-" handleClick={handleDecrement} styleBtn={styles.btn} />
        <Btn text="Reset" handleClick={handleReset} styleBtn={styles.btn} />
        <Btn text="+" handleClick={handleIncrement} styleBtn={styles.btn} />
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
