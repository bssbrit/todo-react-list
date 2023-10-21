import ThemeBtn from "./components/ThemeBtn";
import { useState } from "react";
import Tasks from "./components/Tasks";
import StatusSelector from "./components/StatusSelector";
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
  let [renderedTasks, setRendered] = useState(tasks);
  /* 
  função render com 3 cenários baseados na variavel whichList
  */
  const removeList = function (id) {
    const newList = tasks.filter((i) => i.id !== id);
    const newRendered = tasks.filter((i) => i.id !== id);
    //setTasks((tasks = newList));
    setTasks(newList);
    setRendered(newRendered);
  };
  const render = function (renderedTasks) {
    console.log(renderedTasks.description);
    return (
      <div className="renderedTasks" key={renderedTasks.id}>
        <button
          className="statusBtnStyle"
          onClick={() => {
            if (!renderedTasks.status) {
              renderedTasks.status = true;
            } else {
              renderedTasks.status = false;
            }
            console.log(
              `Atividade ${renderedTasks.description} teve o seu status mudado para ${renderedTasks.status}`
            );
          }}
        ></button>
        <p>{renderedTasks.description}</p>
        <button
          onClick={() => removeList(renderedTasks.id)}
          style={{ color: "red" }}
        >
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
        <Tasks tasks={renderedTasks} render={render} />
      </div>
      <StatusSelector
        tasks={tasks}
        renderedTasks={renderedTasks}
        setRendered={setRendered}
        setTasks={setTasks}
      />
      <p>Drag and drop to reorder list</p>
      {/*
      





      */}
    </div>
  );
}

export default App;
