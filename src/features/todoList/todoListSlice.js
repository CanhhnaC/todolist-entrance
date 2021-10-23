import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { randomId } from "src/utils";

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
        id: randomId(),
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
    editSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, removeTask, editSearch } = todoListSlice.actions;

export const selectTasks = (state) => state.todoList.tasks;
export const selectSearch = (state) => state.todoList.search;

export const selectFilteredTasks = createDraftSafeSelector(selectTasks, selectSearch, (tasks, search) => {
  console.log(tasks);
  if (search) {
    return tasks?.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
  } else {
    return tasks;
  }
});

export default todoListSlice.reducer;
