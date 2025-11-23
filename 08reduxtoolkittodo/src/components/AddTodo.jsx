import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex gap-3 mt-8 w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        className="flex-1 bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500 rounded-lg py-2 px-4 outline-none transition duration-200"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
