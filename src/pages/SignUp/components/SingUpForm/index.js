import { Button } from "@mui/material";
import { startCase } from "lodash";

import ControlledInput from "components/ControlledInput";

import styles from "./style.module.scss";

const SingUpForm = ({ formik }) => {
  const { errors, values, handleChange, handleSubmit } = formik;
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapperForm} onSubmit={handleSubmit}>
        {Object.entries(values).map(([name, value]) => (
          <ControlledInput
            name={name}
            value={value}
            variant="outlined"
            onChange={handleChange}
            label={startCase(name)}
            key={name}
            error={Boolean(errors[name])}
            helperText={errors[name]}
            type={name === "password" || name === "email" ? name : "text"}
            size="small"
          />
        ))}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default SingUpForm;
