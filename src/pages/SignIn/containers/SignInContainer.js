import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useForm } from "hooks";
import SignInView from "../components/SignInView";
import { signInThunk } from "../api";
import { isAuthenticatedSelector } from "../selectors";
import { ROUTE_NAMES } from "Routes/routeNames";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
  };
  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  return (
    <SignInView
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default SignInContainer;
