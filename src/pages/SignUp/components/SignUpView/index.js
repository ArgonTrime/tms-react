import { Link } from "react-router-dom";

import SingUpForm from "../SingUpForm";
import styles from "./style.module.scss";

const SingUpView = ({ formik, errors, dataUser }) => {
  return (
    <div className={styles.wrapper}>
      {dataUser?.data ? (
        <div>
          <p>
            {dataUser.data.message} <Link>Go Home page</Link>
          </p>
        </div>
      ) : (
        <>
          <div>
            <h1>Sign Up</h1>
            <p>
              Welcome to the Pokémon Store, register to use all the
              functionality. Already have an account, try to{" "}
              <Link to="/sign-in">login.</Link>
            </p>
          </div>
          <SingUpForm formik={formik} />
          {errors && <div className={styles.errors}>{errors.message}</div>}
        </>
      )}
    </div>
  );
};
export default SingUpView;
