import { createSelector } from "@reduxjs/toolkit";

const tasksSelector = (store) => store.tasksManager;

export const tasksList = createSelector(
  tasksSelector,
  (tasksManager) => tasksManager.tasks
);
