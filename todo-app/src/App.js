import logo from "./logo.svg";
import React, { useState, useRef, useCallback, useReducer } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //교윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      // modified: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  // const onModify = useCallback(
  //   (id, text) => {
  //     console.log(`id : ${id}, text : ${text}`);
  //     const todo1 = {
  //       id: id,
  //       text: text,
  //       checked: false,
  //       modified: true,
  //     };
  //     console.log(todo1);
  //     console.log(`text : ${text}`);
  //     setTodos(todos.map((todo) => (todo.id === id ? (todo = todo1) : todo)));
  //     console.log(todos);
  //   },
  //   [todos]
  // );

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  // const onClickToModify = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, modified: !todo.modified } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );

  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        // onClickToModify={onClickToModify}
        // onModify={onModify}
      />
    </TodoTemplate>
  );
}

export default App;
