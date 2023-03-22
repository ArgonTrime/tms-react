import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

import { useForm } from "hooks";
import TaskInput from "../TaskInput";

import styles from "./style.module.scss";

const TaskAccordionEditing = ({
  id,
  taskValue,
  isEditing,
  handleEditingTaskCancel,
  handleEditingTaskConfirm,
}) => {
  const { text, description } = taskValue;
  const { form, handleChange } = useForm({ text, description });
  return (
    <div className={styles.wrapper}>
      <Accordion defaultExpanded={isEditing} expanded={true}>
        <AccordionSummary>
          <TaskInput
            name="text"
            label="Task title edit"
            variant="outlined"
            value={form.text}
            onChange={handleChange}
          />
        </AccordionSummary>
        <AccordionDetails>
          <TaskInput
            name="description"
            label="Task description edit"
            variant="outlined"
            value={form.description}
            onChange={handleChange}
          />
          <div className={styles.controls}>
            <Button
              color="success"
              variant="contained"
              onClick={() => handleEditingTaskConfirm(id, form)}
              disabled={
                (text === form.text && description === form.description) ||
                form.text.length === 0 ||
                form.description.length === 0
              }
            >
              Confirm
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => handleEditingTaskCancel(id)}
            >
              Cancel
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
TaskAccordionEditing.propTypes = {
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  taskValue: PropTypes.objectOf(PropTypes.string).isRequired,
  handleEditingTaskCancel: PropTypes.func.isRequired,
  handleEditingTaskConfirm: PropTypes.func.isRequired,
};
export default TaskAccordionEditing;
