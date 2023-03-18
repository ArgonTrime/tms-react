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
      const newTask = {
        id: uuid(),
        text: payload,
        isDone: false,
        isEditing: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, { payload: taskId }) => {
      const taskIndex = state.tasks.findIndex(({ id }) => id === taskId);
      state.tasks.splice(taskIndex, 1);
    },
    completedTask: (state, { payload: taskId }) => {
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isDone = !completedTask.isDone;
    },
    editingTask: (state, { payload: taskId }) => {
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = !completedTask.isEditing;
    },
    editingTaskCancel: (state, { payload: taskId }) => {
      const completedTask = state.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = !completedTask.isEditing;
    },
    editingTaskConfirm: (state, { payload }) => {
      const { taskId, newText } = payload;
      const taskEditing = state.tasks.find(({ id }) => id === taskId);
      taskEditing.text = newText;
      taskEditing.isEditing = !taskEditing.isEditing;
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
