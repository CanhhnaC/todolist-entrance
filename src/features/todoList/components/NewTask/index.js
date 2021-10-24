import React from "react";
import { useDispatch } from "react-redux";

import { TaskForm } from "../TaskForm";
import { addTask } from "../../todoListSlice";

export const NewTask = () => {
  const dispatch = useDispatch();

  const handleAddTask = (data) => {
    dispatch(addTask(data));
  };

  return <TaskForm onSubmit={handleAddTask} isCreate />;
};
