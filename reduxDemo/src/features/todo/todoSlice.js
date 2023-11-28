import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      //   state.tasks.filter(state.tasks !== tasks.id);
      state.tasks = state.tasks.filter((tasks) => tasks.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
