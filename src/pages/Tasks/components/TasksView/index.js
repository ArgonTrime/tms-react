import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const TasksView = ({ task, handleTaskChange, handleTaskCreate, children }) => {
  const { text, description } = task;
  return (
    <div className={styles.wrapper}>
      <Box component="form" onSubmit={handleTaskCreate} className={styles.form}>
        <h1>To do List</h1>
        <TextField
          name="text"
          label="Task title"
          variant="outlined"
          value={text}
          onChange={handleTaskChange}
        />
        <TextField
          name="description"
          label="Task description"
          variant="outlined"
          value={description}
          onChange={handleTaskChange}
        />
        <Button color="success" variant="contained" type="submit">
          Add
        </Button>
      </Box>
      {children}
    </div>
  );
};
TasksView.propTypes = {
  task: PropTypes.objectOf(PropTypes.string).isRequired,
  handleTaskChange: PropTypes.func.isRequired,
  handleTaskCreate: PropTypes.func.isRequired,
};
export default TasksView;
