import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const TaskInput = ({ name, label, value, variant, width = 100, onChange }) => {
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
TaskInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]).isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TaskInput;
