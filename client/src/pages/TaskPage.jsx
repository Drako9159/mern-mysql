import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

export default function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks found</h1>;
    }
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Task Page</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}
