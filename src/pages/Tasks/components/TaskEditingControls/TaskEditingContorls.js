import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import styles from "./style.module.scss";

const TaskEditingControls = ({
  id,
  text,
  inputText,
  handleTextEditing,
  handleEditingTaskConfirm,
  handleEditingTaskCancel,
}) => {
  return (
    <div className={styles.editing}>
      <input type="text" value={inputText} onChange={handleTextEditing} />
      <Button
        text="Confirm"
        handleClick={() => handleEditingTaskConfirm(id, inputText)}
        styles={`${styles.btn} ${styles.btn_add}`}
        disabled={inputText === text || inputText.length === 0}
      />
      <Button
        text="Cancel"
        styles={`${styles.btn} ${styles.btn_delete}`}
        handleClick={() => handleEditingTaskCancel(id)}
      />
    </div>
  );
};
TaskEditingControls.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  handleTextEditing: PropTypes.func.isRequired,
  handleEditingTaskConfirm: PropTypes.func.isRequired,
  handleEditingTaskCancel: PropTypes.func.isRequired,
};
export default TaskEditingControls;
