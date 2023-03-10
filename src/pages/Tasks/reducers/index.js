import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  tasks: [],
};

const tasksReducer = handleActions(
  {
    [actions.createTask]: (state, { payload }) => {
      const newTask = {
        id: uuid(),
        text: payload,
        isDone: false,
        isEditing: false,
      };
      const copyState = structuredClone(state);
      copyState.tasks.push(newTask);
      return copyState;
      //   return { ...state, tasks: [...state.tasks, newTask] };
    },
    [actions.removeTask]: (state, { payload: taskId }) => {
      const copyState = structuredClone(state);
      const taskIndex = copyState.tasks.findIndex(({ id }) => id === taskId);
      copyState.tasks.splice(taskIndex, 1);
      return copyState;
    },
    [actions.completedTask]: (state, { payload: taskId }) => {
      const copyState = structuredClone(state);
      const completedTask = copyState.tasks.find(({ id }) => id === taskId);
      completedTask.isDone = !completedTask.isDone;
      return copyState;
    },
    [actions.editingTask]: (state, { payload: taskId }) => {
      const copyState = structuredClone(state);
      const completedTask = copyState.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = !completedTask.isEditing;
      return copyState;
    },
    [actions.editingTaskCancel]: (state, { payload: taskId }) => {
      const copyState = structuredClone(state);
      const completedTask = copyState.tasks.find(({ id }) => id === taskId);
      completedTask.isEditing = !completedTask.isEditing;
      return copyState;
    },
    [actions.editingTaskConfirm]: (state, { payload }) => {
      const { taskId, newText } = payload;

      const copyState = structuredClone(state);
      const taskEditing = copyState.tasks.find(({ id }) => id === taskId);
      taskEditing.text = newText;
      taskEditing.isEditing = !taskEditing.isEditing;
      return copyState;
    },
  },
  initialState
);
export default tasksReducer;
