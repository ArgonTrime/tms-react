import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./style.module.scss";
import SignInForm from "../SignInForm";

const SignInView = ({ form, handleChange, handleSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Sign In</h1>
        <p>
          Welcome to the Pokémon Store, please login to use all features. If you
          don't have an account, register an <Link to="/sign-up">account.</Link>
        </p>
      </div>
      <SignInForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
SignInView.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SignInView;
