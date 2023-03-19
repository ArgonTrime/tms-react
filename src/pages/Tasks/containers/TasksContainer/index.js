import { useDispatch, useSelector } from "react-redux";
import {
  completedTask,
  createTask,
  editingTask,
  editingTaskCancel,
  editingTaskConfirm,
  removeTask,
} from "../../reducers";

import TasksView from "../../components/TasksView";
import { tasksList } from "../../selectors";
import { useForm } from "hooks";
import TaskAccordion from "../../components/TaskAccordion";
import TaskAccordionEditing from "../../components/TaskAccordionEditing";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksList);
  const { form, handleChange, handleReset } = useForm({
    text: "",
    description: "",
  });

  const handleTaskCreate = (event) => {
    event.preventDefault();
    const { text, description } = form;
    if (text.length > 0 && description.length > 0) {
      dispatch(createTask(form));
      handleReset();
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
  const handleEditingTaskConfirm = (taskId, taskValues) => {
    dispatch(editingTaskConfirm({ taskId, taskValues }));
  };

  return (
    <TasksView
      task={form}
      handleTaskChange={handleChange}
      handleTaskCreate={handleTaskCreate}
    >
      {[...tasks]
        .reverse()
        .map(({ id, text, description, isDone, isEditing }) =>
          isEditing ? (
            <TaskAccordionEditing
              key={id}
              id={id}
              taskValue={{ text, description }}
              isEditing={isEditing}
              handleEditingTaskCancel={handleEditingTaskCancel}
              handleEditingTaskConfirm={handleEditingTaskConfirm}
            />
          ) : (
            <TaskAccordion
              key={id}
              id={id}
              isDone={isDone}
              taskValue={{ text, description }}
              handleRemoveTask={handleRemoveTask}
              handleCompletedTask={handleCompletedTask}
              handleEditingTask={handleEditingTask}
            />
          )
        )}
    </TasksView>
  );
};
export default TasksContainer;
