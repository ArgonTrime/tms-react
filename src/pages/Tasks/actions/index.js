import { createAction } from "redux-actions";

export const createTask = createAction("CREATE_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("COMPLETED_TASK");
export const editingTask = createAction("EDITING_TASK");
export const editingTaskConfirm = createAction("EDITING_TASK_CONFIRM");
export const editingTaskCancel = createAction("EDITING_TASK_CANCEL");
