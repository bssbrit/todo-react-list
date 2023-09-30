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

  const addTask = function (task) {
    let newTask = {
      id: tasks.length + 1,
      description: task,
    };

    setTask((tasks = [...tasks, newTask]));

    console.log(tasks);
    console.log(task);
  };
  return (
    <div className="App">
      <Header funcao={addTask} />
      <Tasks taks={tasks} />
    </div>
  );
}

export default App;
