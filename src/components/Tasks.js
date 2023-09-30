import React from "react";

const Tasks = ({ taks }) => {
  return (
    <>
      {taks.map((task) => (
        <h3 key={task.id}>{task.description}</h3>
      ))}
    </>
  );
};

export default Tasks;
