import PropTypes from "prop-types";
import { Button } from "@mui/material";

import ControlledInput from "components/ControlledInput";

import styles from "./style.module.scss";

const SignInForm = ({ form, handleChange, handleSubmit }) => {
  const { email, password } = form;
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapperForm} onSubmit={handleSubmit}>
        <ControlledInput
          name="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChange}
          type="email"
          size="small"
        />
        <ControlledInput
          name="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleChange}
          type="password"
          size="small"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};
SignInForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SignInForm;
