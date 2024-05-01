const { createSlice, configureStore } = require("@reduxjs/toolkit");

const todoInetialState = {
  todoList: [],
  currentTodoId: "",
};

const todoSlice = createSlice({
  initialState: todoInetialState,
  name: "todo",
  reducers: {
    addTodo(state, action) {
      state.todoList = action.payload;
    },
    setCurrent(state, action) {
      state.currentTodoId = action.payload;
    },
  },
});

export const todoAction = todoSlice.actions;

const store = configureStore({ reducer: todoSlice.reducer });

export default store;