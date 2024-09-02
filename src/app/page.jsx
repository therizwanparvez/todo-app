import React from "react";
import AddTodoForm from "./addTodoForm";
import { TodoItem } from "@/components/ServerComponents";

const Home = () => {
  return (
    <div className="container">
      <AddTodoForm />
      <section className="todosContainer">
        <TodoItem title="Sample Task" description="Sample description" id="sampleId" completed={false} />
      </section>
    </div>
  );
};

export default Home;
