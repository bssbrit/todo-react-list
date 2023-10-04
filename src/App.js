import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import StatusSelector from "./components/StatusSelector";
function App() {
  let [tasks, setTask] = useState([
    {
      id: 1,
      description: "Andar de costas dando mortal",
    },
    {
      id: 2,
      description:
        "Jogar CS e se tornar pro, virar milionário e acabar com a fome mundial ",
    },
    {
      id: 3,
      description: "Comer um xis",
    },
  ]);
  let [active, setActive] = useState([...tasks]);
  let [completed, setCompleted] = useState([
    {
      id: 4,
      description: "Postar projeto no Linkedin",
    },
    {
      id: 65,
      description: "Treinar",
    },
  ]);
  const addTask = function (task) {
    let newTask = {
      id: tasks.length + 1,
      description: task,
    };

    setTask((tasks = [...tasks, newTask]));
    setActive((active = [...tasks]));
    console.log(tasks);
  };

  const deleteTask = function (id) {
    setTask((tasks = tasks.filter((task) => task.id !== id)));
  };
  const deleteBtn = function (id) {
    deleteTask(id);
    setActive((active = [...tasks]));
    console.log(tasks);
  };

  const getCompleted = function () {
    console.log("hi");
    setTask((tasks = [...completed]));
  };

  const getAll = function () {
    setTask((tasks = [...completed, ...active]));
  };

  const getActive = function () {
    console.log("active");
    setTask((tasks = active));
  };

  const clearCompleted = function () {
    setCompleted((completed = []));
    console.log(completed);
    setTask((tasks = active));
  };
  const changeStatus = function (task) {
    console.log(task.Id);
  };
  return (
    <div className="App">
      <button onClick={() => console.log(active)}></button>
      <Header funcao={addTask} />
      <Tasks changeStatus={changeStatus} tasks={tasks} deleteBtn={deleteBtn} />
      <StatusSelector
        tasks={tasks}
        completedFunction={getCompleted}
        allFunction={getAll}
        activeFunction={getActive}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
