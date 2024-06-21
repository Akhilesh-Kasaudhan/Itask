import React, { useState } from "react";

const EditTodoForm = ({ editTask, task }) => {
  console.log(task);
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
  };
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="bg-transparent border-2 border-[#8758ff] outline-none py-2 px-4 mt-4 mb-8 w-[300px] text-base text-indigo-100"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-4 mt-4 mb-8 bg-[#8758ff] border-2 border-[#8758ff]"
      >
        Edit Task
      </button>
    </form>
  );
};

export default EditTodoForm;
