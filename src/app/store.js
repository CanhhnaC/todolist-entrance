import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "src/features/todoList/todoListSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
});
