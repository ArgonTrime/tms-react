import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const ControlledInput = ({
  name,
  label,
  value,
  variant,
  width = 100,
  onChange,
  error,
  helperText,
  type,
  size,
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
        error={error}
        helperText={helperText}
        type={type}
        size={size}
      />
    </>
  );
};
ControlledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]).isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default ControlledInput;
