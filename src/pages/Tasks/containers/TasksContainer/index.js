import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const [task, setTask] = useState("");
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);

  const handleTaskCreate = () => {
    if (task.length > 0) {
      dispatch(createTask(task));
      setTask("");
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
      task={task}
      handleTaskChange={handleTaskChange}
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
