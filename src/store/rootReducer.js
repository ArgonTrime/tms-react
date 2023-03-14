import { combineReducers } from "redux";

import tasksReducer from "../pages/Tasks/reducers";

const rootReducer = () => {
  return combineReducers({
    tasksPage: tasksReducer,
  });
};
export default rootReducer;
