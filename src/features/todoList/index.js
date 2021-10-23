import React from "react";
import { useSelector } from "react-redux";

import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { Search } from "./components/Search";

import { selectFilteredTasks } from "./todoListSlice";
import styles from "./index.module.scss";

export const TodoList = () => {
  const tasks = useSelector(selectFilteredTasks);

  return (
    <div className={styles.root}>
      <div className={styles.newTask}>
        <NewTask />
      </div>
      <div className={styles.todoList}>
        <div>Todo List</div>
        <Search />
        <div>
          {tasks?.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};
