import React from "react";

const StatusSelector = ({ tasks, renderedTasks, setRendered, setTasks }) => {
  const all = function () {
    setRendered(tasks);
  };
  const completed = function () {
    const newList = tasks.filter((i) => i.status === true);
    setRendered(newList);
  };
  const active = function () {
    const newList = tasks.filter((i) => i.status === false);
    setRendered(newList);
  };
  const clearCompleted = function () {
    const newList = tasks.filter((i) => i.status === false);
    setTasks(newList);
  };
  return (
    <div className="statusSelector">
      <p>
        {tasks.length === 0 ? "No tasks left" : `${tasks.length} tasks left`}
      </p>
      <div>
        <button onClick={all}>All</button>
        <button onClick={active}>Active</button>
        <button onClick={completed}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default StatusSelector;
