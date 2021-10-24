import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import sortBy from "lodash.sortby";
import uuid from "uuid";

const initialState = {
  tasks: [],
  search: ""
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid.v4(),
        isCompleted: false,
        ...action.payload
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) state.tasks[index].isCompleted = action.payload.isCompleted;
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) state.tasks.splice(index, 1);
    },
    toggleAllCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
    },
    editSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, removeTask, editSearch, toggleAllCompleted } = todoListSlice.actions;

export const selectTasks = (state) => state.todoList.tasks;
export const selectSearch = (state) => state.todoList.search;

export const selectTaskLeft = createDraftSafeSelector(selectTasks, (tasks) => tasks?.some((task) => task.isCompleted));

export const selectFilteredTasks = createDraftSafeSelector(selectTasks, selectSearch, (tasks, search) => {
  const sortedTasks = sortBy(tasks, (o) => o.date);
  if (search) {
    return sortedTasks?.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
  } else {
    return sortedTasks;
  }
});

export default todoListSlice.reducer;
