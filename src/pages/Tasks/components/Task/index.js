import PropTypes from "prop-types";

import { useInputText } from "../../../../hooks";
import TaskControls from "../TaskControls";
import TaskEditingControls from "../TaskEditingControls/TaskEditingContorls";

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
  const { inputText, handleTextEditing } = useInputText(text);

  return (
    <div
      className={
        isDone ? `${styles.wrapper} ${styles.wrapper_done}` : styles.wrapper
      }
    >
      {isEditing ? (
        <TaskEditingControls
          id={id}
          text={text}
          inputText={inputText}
          handleTextEditing={handleTextEditing}
          handleEditingTaskConfirm={handleEditingTaskConfirm}
          handleEditingTaskCancel={handleEditingTaskCancel}
        />
      ) : (
        <p>{text}</p>
      )}
      {!isEditing && (
        <TaskControls
          id={id}
          isDone={isDone}
          handleCompletedTask={handleCompletedTask}
          handleEditingTask={handleEditingTask}
          handleRemoveTask={handleRemoveTask}
        />
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
