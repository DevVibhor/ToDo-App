import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import headerImage from "./assets/icon.png";
import TasksList from "./components/TasksList";
import NewTask from "./components/NewTask";

export type TasksType = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([]);

  function createTask(titleData: string, descriptionData: string) {
    setTasks((prevTask) => {
      const newTask: TasksType = {
        id: Math.random(),
        title: titleData,
        description: descriptionData,
      };
      localStorage.setItem("TasksData", JSON.stringify([...prevTask, newTask]));
      return [...prevTask, newTask];
    });
  }

  const onDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("TasksData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage?.getItem("TasksData") || "{}");
    if (items) {
      setTasks(items);
    }
  }, []);

  return (
    <main>
      <Header image={{ src: headerImage, alt: "Header Image" }}>
        <h1>List</h1>
      </Header>
      <NewTask createTask={createTask} />

      <TasksList tasks={tasks} onDeleteTask={onDeleteTask} />
    </main>
  );
}
