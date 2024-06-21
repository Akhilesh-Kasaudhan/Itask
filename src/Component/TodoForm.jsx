import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length) addTodo(value);

    setValue("");
  };
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="bg-transparent border-2 border-[#8758ff] outline-none py-2 px-4 mt-4 mb-8 w-[300px] text-base text-indigo-100"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-4 mt-4 mb-8 bg-[#8758ff] border-2 border-[#8758ff]"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
