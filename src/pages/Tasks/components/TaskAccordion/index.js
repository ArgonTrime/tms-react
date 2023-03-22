import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./style.module.scss";

const TaskAccordion = ({
  taskValue,
  id,
  isDone,
  handleRemoveTask,
  handleCompletedTask,
  handleEditingTask,
}) => {
  const { text, description } = taskValue;
  return (
    <div className={styles.wrapper}>
      <Accordion sx={{ background: isDone ? "#9c9d9f" : "" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <div className={styles.controls}>
            <Checkbox
              color="success"
              onChange={(event) => handleCompletedTask(id, event)}
            />
            <Button
              variant="contained"
              disabled={isDone}
              onClick={() => handleEditingTask(id)}
            >
              Edit
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => handleRemoveTask(id)}
            >
              Delete
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
TaskAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  taskValue: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleCompletedTask: PropTypes.func.isRequired,
  handleEditingTask: PropTypes.func.isRequired,
};
export default TaskAccordion;
