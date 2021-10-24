import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";
import { hydrate } from "./features/TodoList/todoListSlice";
import reportWebVitals from "./reportWebVitals";

const getTodosFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("reduxState");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const todos = getTodosFromLocalStorage();

if (todos) {
  store.dispatch(hydrate(todos?.todoList));
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
