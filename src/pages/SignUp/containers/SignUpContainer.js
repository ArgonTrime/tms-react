import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SingUpValidationForm } from "../validation";
import SingUpView from "../components/SignUpView";
import { useFetching } from "hooks";
import { signUp } from "../api";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { ROUTE_NAMES } from "Routes/routeNames";

const SignUpContainer = () => {
  const { data, errors, handleDataLoad } = useFetching(signUp);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
    },
    validationSchema: SingUpValidationForm,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(values);
      resetForm();
    },
  });

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  return <SingUpView formik={formik} errors={errors} dataUser={data} />;
};

export default SignUpContainer;
