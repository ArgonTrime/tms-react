import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const Counter = ({
  id,
  countValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  handleRemoveCounter,
}) => {
  const isEven = countValue % 2 === 0;
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
        <Button
          text="-"
          handleClick={() => handleDecrement(id)}
          styles={styles.btn}
        />
        <Button
          text="Reset"
          handleClick={() => handleReset(id)}
          styles={styles.btn}
        />
        <Button
          text="+"
          handleClick={() => handleIncrement(id)}
          styles={styles.btn}
        />
      </div>
      <Button
        text="X"
        styles={`${styles.btn} ${styles.btn_remove}`}
        handleClick={() => handleRemoveCounter(id)}
      />
    </div>
  );
};
Counter.propTypes = {
  id: PropTypes.string.isRequired,
  countValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemoveCounter: PropTypes.func.isRequired,
};
export default Counter;
