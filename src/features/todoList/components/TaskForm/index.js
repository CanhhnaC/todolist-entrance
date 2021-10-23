import React from "react";
import { useForm } from "react-hook-form";
import { PRIORITY } from "../../constant";

export const TaskForm = ({ onSubmit, initialValues, isCreate }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: initialValues });

  const preHandle = (data, e) => {
    if (isCreate) {
      reset();
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(preHandle)}>
      <input type="text" placeholder="Add new task..." {...register("title", {})} />

      <div>
        <label>Description</label>
        <textarea {...register("description", {})} />
      </div>

      <div className="">
        <div>
          <label>Due Date</label>
          <input type="date" {...register("date", {})} />
        </div>
        <div>
          <label>Priority</label>
          <select {...register("priority", {})}>
            <option value={PRIORITY.LOW}>Low</option>
            <option value={PRIORITY.NORMAL}>Normal</option>
            <option value={PRIORITY.HIGH}>High</option>
          </select>
        </div>
      </div>

      <button type="submit">{isCreate ? "Add" : "Update"}</button>
    </form>
  );
};
