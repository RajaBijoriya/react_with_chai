import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Correct way
const store = configureStore({
  reducer: {
    todos: todoReducer, // 'todos' is the slice name
  },
});

export default store;
