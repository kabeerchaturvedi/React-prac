import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
// import { useStore } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const { getState } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter a Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a todo"
            style={{
              width: 200,
              padding: 20,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 20,
              borderRadius: 25,
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            GO
          </button>
          <ul>
            {todos &&
              todos.map((t) => (
                <li key={t}>
                  <span>{t}</span>
                  <button
                    type="button"
                    style={{
                      borderRadius: 25,
                      fontSize: 20,
                      marginLeft: 20,
                      color: "white",
                      backgroundColor: "orange",
                    }}
                    onClick={() => removeHandler(t)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
