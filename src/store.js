import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "src/features/TodoList/todoListSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
});
