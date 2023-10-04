import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
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
  return (
    <div className="App">
      <button onClick={() => console.log(active)}></button>
      <Header funcao={addTask} />
      <Tasks tasks={tasks} deleteBtn={deleteBtn} />
    </div>
  );
}

export default App;
