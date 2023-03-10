import PropTypes from "prop-types";
import { useState } from "react";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const Task = ({
  id,
  text,
  isDone,
  isEditing,
  handleRemoveTask,
  handleCompletedTask,
  handleEditingTask,
  handleEditingTaskCancel,
  handleEditingTaskConfirm,
}) => {
  const [textEditing, setTextEditing] = useState(text);
  const handleTextEditing = (event) => {
    setTextEditing(event.target.value);
  };

  return (
    <div
      className={
        isDone ? `${styles.wrapper} ${styles.wrapper_done}` : styles.wrapper
      }
    >
      {isEditing ? (
        <div className={styles.editing}>
          <input type="text" value={textEditing} onChange={handleTextEditing} />
          <Button
            text="Confirm"
            handleClick={() => handleEditingTaskConfirm(id, textEditing)}
            styles={`${styles.btn} ${styles.btn_add}`}
            disabled={textEditing === text || textEditing.length === 0}
          />
          <Button
            text="Cancel"
            styles={`${styles.btn} ${styles.btn_delete}`}
            handleClick={() => handleEditingTaskCancel(id)}
          />
        </div>
      ) : (
        <p>{text}</p>
      )}
      {!isEditing && (
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
      )}
    </div>
  );
};
Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleCompletedTask: PropTypes.func.isRequired,
  handleEditingTask: PropTypes.func.isRequired,
  handleEditingTaskCancel: PropTypes.func.isRequired,
  handleEditingTaskConfirm: PropTypes.func.isRequired,
};
export default Task;
