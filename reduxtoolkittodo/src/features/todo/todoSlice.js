import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded'
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("todos/fetchTodos/pending", (state) => {
        state.status = "loading";
      })
      .addCase("todos/fetchTodos/fulfilled", (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase("todos/fetchTodos/rejected", (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
