const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (
    action.type //based on this it will choose the task
  ) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
export default taskReducer;
