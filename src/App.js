import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/Tasklist/Tasklist";

let idAcc = 0;

const generateId = () => {
  idAcc++;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    console.log("update task");
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        }
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
        />
        <Tasklist
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
        />
        <Tasklist
          title="Completo"
          onAddTask={addTask}
          taskState="Completo"
          tasks={tasks.filter((t) => t.state === "Completo")}
          onTaskUpdate={updateTask}
        />
      </div>
    </div>
  );
}
