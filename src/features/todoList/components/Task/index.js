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
      <div className="flex justify-between items-center p-5 border border-black">
        <div className="flex space-x-2 items-center">
          <input type="checkbox" checked={isCompleted} onChange={handleToggleComplete} />
          <div className="text-lg">{title}</div>
        </div>
        <div className="space-x-2">
          <button
            className="btn btn-blue"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            Detail
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleRemoveTask();
            }}
          >
            Remove
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="border border-t-0 border-black">
          <TaskForm initialValues={{ title, description, priority, date }} onSubmit={handleEditTask} />
        </div>
      )}
    </div>
  );
};
