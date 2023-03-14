import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const TaskControls = ({
  id,
  isDone,
  handleCompletedTask,
  handleEditingTask,
  handleRemoveTask,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => handleCompletedTask(id)}
      />
      <Button
        text="Editing"
        handleClick={() => handleEditingTask(id)}
        styles={`${styles.btn} ${styles.btn_add}`}
      />
      <Button
        text="Delete"
        handleClick={() => handleRemoveTask(id)}
        styles={`${styles.btn} ${styles.btn_delete}`}
      />
    </div>
  );
};
TaskControls.propTypes = {
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  handleCompletedTask: PropTypes.func.isRequired,
  handleEditingTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};
export default TaskControls;
