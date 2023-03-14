import { useDispatch, useSelector } from "react-redux";

import { useInputText } from "../../../../hooks";
import {
  completedTask,
  createTask,
  editingTask,
  editingTaskCancel,
  editingTaskConfirm,
  removeTask,
} from "../../actions";
import Task from "../../components/Task";
import TasksView from "../../components/TasksView";
import { tasksSelector } from "../../selectors";

const TasksContainer = () => {
  const { inputText, handleTextEditing, handleTextClear } = useInputText("");
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);

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
