import React from "react";
import AddTodoForm from "./addTodoForm";

const Home = () => {
  return (
    <div className="container">
      <AddTodoForm />
      <section className="todosContainer"></section>
    </div>
  );
};

export default Home;
