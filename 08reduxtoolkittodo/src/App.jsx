import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Todo Application
        </h1>

        <div className="space-y-6">
          <AddTodo />

          <div className="border-t pt-6">
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
