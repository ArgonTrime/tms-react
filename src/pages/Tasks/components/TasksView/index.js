import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const TasksView = ({ task, handleTaskChange, handleTaskCreate, children }) => {
  return (
    <div className={styles.wrapper}>
      <h1>To do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          styles={styles.input}
        />
        <Button text="Add" handleClick={handleTaskCreate} styles={styles.btn} />
      </div>
      {children}
    </div>
  );
};
TasksView.propTypes = {
  task: PropTypes.string.isRequired,
  handleTaskChange: PropTypes.func.isRequired,
  handleTaskCreate: PropTypes.func.isRequired,
};
export default TasksView;
