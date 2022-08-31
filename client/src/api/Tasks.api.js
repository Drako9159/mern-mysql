import axios from "axios";

export const createTaskRequest = (task) => {
  return axios.post("http://localhost:4000/tasks", task);
};
