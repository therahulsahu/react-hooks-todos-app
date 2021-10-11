import React, { createContext } from "react";
import todoReducer from "../reducers/todos.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  { id: 1, task: "React Todo App", completed: false },
  { id: 2, task: "Try adding a new todo", completed: false },
  { id: 3, task: "Complete this course", completed: false },
];

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
