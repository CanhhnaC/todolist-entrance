import React from "react";
import { useDispatch } from "react-redux";

import { PRIORITY } from "../../constant";
import { addTask } from "../../todoListSlice";
import { TaskForm } from "../TaskForm";

export const NewTask = () => {
  const dispatch = useDispatch();

  const handleAddTask = (data) => {
    dispatch(addTask(data));
  };

  const initialValues = {
    title: "",
    description: "",
    date: undefined,
    priority: PRIORITY.NORMAL
  };

  return (
    <div>
      <div>NewTask</div>
      <TaskForm onSubmit={handleAddTask} initialValues={initialValues} isCreate />
    </div>
  );
};
