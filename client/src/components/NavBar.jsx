import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-10 py-2">
      <h1>React MySQL</h1>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </div>
  );
}
