import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: [],
};

const tasksManagerSlice = createSlice({
  name: "tasksManager",
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      const { text, description } = payload;
      const newTask = {
        id: uuid(),
        text,
        description,
        isDone: false,
        isEditing: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, { payload: taskId }) => {
      const taskIndex = state.tasks.findIndex(({ id }) => id === taskId);
      state.tasks.splice(taskIndex, 1);
    },
    completedTask: (state, { payload }) => {
      const { taskId, isCheked } = payload;
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isDone = isCheked;
    },
    editingTask: (state, { payload: taskId }) => {
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = true;
    },
    editingTaskCancel: (state, { payload: taskId }) => {
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = false;
    },
    editingTaskConfirm: (state, { payload }) => {
      const { taskId, taskValues } = payload;
      const { text, description } = taskValues;
      const taskEditing = state.tasks.find(({ id }) => id === taskId);
      taskEditing.text = text;
      taskEditing.description = description;
      taskEditing.isEditing = false;
    },
  },
});

export const {
  createTask,
  removeTask,
  completedTask,
  editingTask,
  editingTaskCancel,
  editingTaskConfirm,
} = tasksManagerSlice.actions;
export default tasksManagerSlice.reducer;
