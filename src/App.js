import ThemeBtn from "./components/ThemeBtn";
import { useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Complete report for work",
      status: false,
    },
    {
      id: 2,
      description: "Buy groceries",
      status: false,
    },
    {
      id: 3,
      description: "Go for a run",
      status: false,
    },
    {
      id: 4,
      description: "Walk the dog",
      status: true,
    },
    {
      id: 5,
      description: "Code a fucking lot",
      status: true,
    },
  ]);
  /* 
  função render com 3 cenários baseados na variavel whichList
  */
  const removeList = function (id) {
    const newList = tasks.filter((i) => i.id !== id);
    setTasks((tasks = newList));
  };
  const render = function (task) {
    console.log(task.description);
    return (
      <div className="task" key={task.id}>
        <button
          className="statusBtnStyle"
          onClick={() => {
            if (!task.status) {
              task.status = true;
            } else {
              task.status = false;
            }
            console.log(
              `Atividade ${task.description} teve o seu status mudado para ${task.status}`
            );
          }}
        ></button>
        <p>{task.description}</p>
        <button onClick={() => removeList(task.id)} style={{ color: "red" }}>
          {" "}
          X
        </button>
      </div>
    );
  };

  return (
    <div className="App ">
      <div>
        <div>
          <h1>TODO</h1>
          <ThemeBtn />
        </div>
        <div>New Task Input</div>
      </div>

      <div className="tasks">
        <Tasks tasks={tasks} render={render} />
      </div>
      <div>
        {/* 
        <p> Número de items sobrando
        <div>
        All
        Active
        Completed
        </div>
        <p>Clear Completed

        */}
      </div>
      <p>Drag and drop to reorder list</p>
      {/*
      





      */}
    </div>
  );
}

export default App;
