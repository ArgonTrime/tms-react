import { useDispatch, useSelector } from "react-redux";

import TasksView from "../../components/TasksView";
import {
  completedTask,
  createTask,
  editingTask,
  editingTaskCancel,
  editingTaskConfirm,
  removeTask,
} from "../../reducers";
import { tasksList } from "../../selectors";
import { useInputText } from "../../../../hooks";
import Task from "../../components/Task";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksList);
  const { inputText, handleTextEditing, handleTextClear } = useInputText("");

  const handleTaskCreate = () => {
    if (inputText.length > 0) {
      dispatch(createTask(inputText));
      handleTextClear();
    }
  };
  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };
  const handleCompletedTask = (taskId) => {
    dispatch(completedTask(taskId));
  };
  const handleEditingTask = (taskId) => {
    dispatch(editingTask(taskId));
  };
  const handleEditingTaskCancel = (taskId) => {
    dispatch(editingTaskCancel(taskId));
  };
  const handleEditingTaskConfirm = (taskId, newText) => {
    dispatch(editingTaskConfirm({ taskId, newText }));
  };

  return (
    <TasksView
      task={inputText}
      handleTaskChange={handleTextEditing}
      handleTaskCreate={handleTaskCreate}
    >
      {[...tasks].reverse().map(({ id, text, isDone, isEditing }) => (
        <Task
          text={text}
          key={id}
          id={id}
          isDone={isDone}
          isEditing={isEditing}
          handleRemoveTask={handleRemoveTask}
          handleCompletedTask={handleCompletedTask}
          handleEditingTask={handleEditingTask}
          handleEditingTaskCancel={handleEditingTaskCancel}
          handleEditingTaskConfirm={handleEditingTaskConfirm}
        />
      ))}
    </TasksView>
  );
};
export default TasksContainer;
