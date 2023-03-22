import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const TaskInputEditing = ({
  name,
  label,
  value,
  variant,
  width = 100,
  onChange,
}) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        sx={{ width: `${width}%` }}
      />
    </>
  );
};
TaskInputEditing.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]).isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TaskInputEditing;
