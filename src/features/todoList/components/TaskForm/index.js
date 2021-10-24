import React from "react";
import { useForm } from "react-hook-form";

const currentDate = new Date().toISOString().substr(0, 10);

const defaultValue = {
  title: "",
  description: "",
  date: currentDate,
  priority: "Normal"
};

export const TaskForm = ({ onSubmit, initialValues, isCreate }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues ?? defaultValue });

  const preHandleSubmit = (data) => {
    if (isCreate) {
      reset();
    }

    onSubmit(data);
  };

  return (
    <form className="space-y-5 p-5" onSubmit={handleSubmit(preHandleSubmit)}>
      <input
        className="form-control"
        type="text"
        placeholder="Add new task..."
        {...register("title", { required: true })}
      />
      {errors.title?.type === "required" && <span className="text-red-500">Title is required</span>}

      <div>
        <label>Description</label>
        <textarea rows={5} className="form-control" {...register("description", {})} />
      </div>

      <div className="flex justify-between flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
        <div className="flex-1">
          <label>Due Date</label>
          <input className="form-control" type="date" {...register("date", {})} min={currentDate} />
        </div>
        <div className="flex-1">
          <label>Priority</label>
          <select className="form-control" {...register("priority", {})}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <button className="btn btn-green w-full" type="submit">
        {isCreate ? "Add" : "Update"}
      </button>
    </form>
  );
};
