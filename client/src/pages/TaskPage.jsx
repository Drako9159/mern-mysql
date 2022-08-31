import { useEffect } from "react";

export default function TaskPage() {
  useEffect(() => {
    console.log("TaskPage");
  }, []);

  return (
    <div>
      <h1>Task Page</h1>
    </div>
  );
}
