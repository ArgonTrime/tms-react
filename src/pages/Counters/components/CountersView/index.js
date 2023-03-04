import PropTypes from "prop-types";

import Button from "../../../../components/Button";
import Counter from "../Counter";

import styles from "./style.module.scss";

const CountersView = ({
  counters,
  commonValues,
  handleAddCounter,
  handleRemoveAllCounters,
  handleRemoveCounter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  const { countCounters, sumCounters, averageValueCounters } = commonValues;
  return (
    <div className={styles.wrapper}>
      <div className={styles.monitor}>
        <h1>Counters</h1>
        <div className={styles.monitor_value}>
          <p>Counters:</p>
          <p>{countCounters}</p>
        </div>
        <div className={styles.monitor_value}>
          <p>Sum counters:</p>
          <p>{sumCounters}</p>
        </div>
        <div className={styles.monitor_value}>
          <p>Average value counters:</p>
          <p>{averageValueCounters}</p>
        </div>
        <Button
          text="Add Counter"
          handleClick={handleAddCounter}
          styles={`${styles.btn} ${styles.btn_add}`}
        />
        <Button
          text="Reset"
          handleClick={handleRemoveAllCounters}
          styles={`${styles.btn} ${styles.btn_reset}`}
        />
      </div>
      {counters.map(({ id, countValue }) => (
        <Counter
          id={id}
          key={id}
          countValue={countValue}
          handleRemoveCounter={handleRemoveCounter}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      ))}
    </div>
  );
};
CountersView.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      countValue: PropTypes.number.isRequired,
    })
  ),
  commonValues: PropTypes.objectOf(PropTypes.number),
  handleAddCounter: PropTypes.func.isRequired,
  handleRemoveAllCounters: PropTypes.func.isRequired,
  handleRemoveCounter: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default CountersView;
