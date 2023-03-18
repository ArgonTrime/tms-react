import { configureStore } from "@reduxjs/toolkit";
import tasksManagerReducer from "../pages/Tasks/reducers";

export const store = configureStore({
  reducer: {
    tasksManager: tasksManagerReducer,
  },
});
