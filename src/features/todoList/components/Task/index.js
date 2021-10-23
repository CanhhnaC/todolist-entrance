import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask, removeTask } from "../../todoListSlice";
import { TaskForm } from "../TaskForm";

export const Task = ({ title, isCompleted, description, priority, date, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleEditTask = (data) => {
    dispatch(
      editTask({
        id,
        ...data
      })
    );
  };

  const handleToggleComplete = (e) => {
    dispatch(
      toggleTask({
        id,
        isCompleted: e.target.checked
      })
    );
  };

  const handleRemoveTask = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <div>
      <div>
        <div>
          <input type="checkbox" checked={isCompleted} onChange={handleToggleComplete} />
          <div>{title}</div>
        </div>
        <div>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            Detail
          </button>
          <button
            onClick={() => {
              handleRemoveTask();
            }}
          >
            Remove
          </button>
        </div>
      </div>
      {isExpanded && <TaskForm initialValues={{ title, description, priority, date }} onSubmit={handleEditTask} />}
    </div>
  );
};
