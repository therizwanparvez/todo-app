"use client";
import React from "react";

const AddTodoForm = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" name="" placeholder="Task Title" />
          <input type="text" name="" placeholder="Task Description" />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default AddTodoForm;
