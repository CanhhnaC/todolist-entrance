import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: () => {}
  }
});

export const { addTask } = todoListSlice.actions;

export const selectTasks = (state) => state.todoList.tasks;

export default todoListSlice.reducer;
