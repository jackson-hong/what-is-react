import './App.css';
import React, {useState, useCallback, useRef} from "react"
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState([{
    id : 1,
    text: '리액트의 기초 알아보기',
    checked:true,
      modify:false,
  },{
    id:2,
    text : '컴포넌트 스타일링해보기',
    checked: true,
      modify:false,
  },{
    id:3,
    text:'일정관리 앱 만들어 보기',
    checked: false,
      modify:false,
  }]);

  const onToggle = useCallback(
      id => {
          setTodos(
              todos.map(todo => todo.id === id ? {
                  ...todo,
                  checked : !todo.checked
              } : todo)
          )
      },[todos]
  );

  const onModify = useCallback(
      id => {
          setTodos(
              todos.map(todo => todo.id === id ? {
                  ...todo,
                  modify : !todo.modify
              } : todo)
          )
      }, [todos]
  );

  const onModifyEnd = useCallback(
      (id, text) => {
          setTodos(
              todos.map(todo => todo.id === id ? {
                  ...todo,
                  text : text,
                  modify: !todo.modify
              } : todo)
          )
      }, [todos]
  )

  const nextId = useRef(4);
  //useRef를 사용 하는 이유는
  //이 값을 화면에 보이지도 않고, 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요도 없기 때문
  //props로 전달해야 할 함수를 만들 때는 useCallback을 사용해서 함수를 감싸는 것을 습관화하기

  const onInsert = useCallback(
      text => {
        console.log('onInsert 실행')
        const todo = {
          id : nextId.current,
          text,
          checked : false
        };
        setTodos(todos.concat(todo))
        nextId.current += 1;
      },
      [todos]
  );
  const onRemove = useCallback(
      id => {
          setTodos(todos.filter(ele => ele.id != id))
      }
      ,[todos]
  )

  return <TodoTemplate >
    <TodoInsert onInsert={onInsert}/>
    <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onModify={onModify}
        onModifyEnd={onModifyEnd}/>
  </TodoTemplate>
}

export default App;
