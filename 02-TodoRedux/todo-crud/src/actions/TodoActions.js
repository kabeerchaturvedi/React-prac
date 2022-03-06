export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hadTodo = todos.find((i) => i.todo === todo);
  if (!hadTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      payload: [{ id: todo, todo }, ...todo],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
