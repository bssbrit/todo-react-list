import React from "react";

const Tasks = ({ tasks, deleteBtn, changeStatus }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <button onClick={changeStatus}> check </button>
          <h3>{task.description}</h3>
          <button onClick={() => deleteBtn(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Tasks;
