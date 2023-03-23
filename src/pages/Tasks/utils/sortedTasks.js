const sortedTasks = (tasks) => {
  return [...tasks]
    .reverse()
    .sort((task, nexTask) => task.isDone - nexTask.isDone);
};
export default sortedTasks;
