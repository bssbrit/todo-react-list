import React from "react";

const Tasks = ({ tasks, render }) => {
  return <>{tasks.map(render)}</>;
};

export default Tasks;
