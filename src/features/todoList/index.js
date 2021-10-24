import React from "react";
import { useSelector } from "react-redux";

import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { Search } from "./components/Search";
import { BulkAction } from "./components/BulkAction";

import { selectFilteredTasks, selectTaskLeft } from "./todoListSlice";
import styles from "./index.module.scss";

export const TodoList = () => {
  const tasks = useSelector(selectFilteredTasks);
  const isTaskLeft = useSelector(selectTaskLeft);

  return (
    <div className={styles.root}>
      <div className={styles.newTask}>
        <div className="font-bold text-center">NewTask</div>
        <NewTask />
      </div>
      <div className={styles.todoList}>
        <div className="font-bold text-center">Todo List</div>
        <Search />
        <div className="flex-1 p-5 pt-0 space-y-3">
          {tasks?.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
        {isTaskLeft && <BulkAction />}
      </div>
    </div>
  );
};
