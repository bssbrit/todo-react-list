import React from "react";

const Tasks = ({ tasks, deleteBtn }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.description}</h3>
          <button onClick={() => deleteBtn(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Tasks;
