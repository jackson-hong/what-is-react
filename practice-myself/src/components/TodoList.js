import React from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.scss';
const TodoList = ({todos, onRemove, onToggle, onModify, onModifyEnd}) => {
    return (
        <div className={"TodoList"}>
            {
                //맵을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 주어야 한다.
                todos.map(todo => <TodoListItem todo={todo}
                                                key={todo.id}
                                                onRemove={onRemove}
                                                onToggle={onToggle}
                                                onModify={onModify}
                                                onModifyEnd={onModifyEnd}/>)
            }
        </div>
    );
};

export default TodoList;