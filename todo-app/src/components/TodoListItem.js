import React, { useCallback, useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/all";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
  /*onClickToModify,
  onModify,*/
  style,
}) => {
  const { id, text, checked, modified } = todo;
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  /* const onSubmitToModify = useCallback(
    (e) => {
      console.log(value);
      // onModify(id, value);
      e.preventDefault();
    },
    [onModify, value]
  )*/ return (
    //TodoListItem-virtualized 라는 클래스를 만든 건 컴포넌트 사이사이에 테두리를 제대로 쳐주고
    // 홀수 번째/짝수번째 항목에 다른 배경 색상을 설정하기 위해서!
    <div className={"TodoListItem-virtualized"} style={style}>
      <div className={"TodoListItem"}>
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className={"text"}>
            {/*<form onSubmit={onSubmitToModify}>*/}
            {/*{modified ? (*/}
            {/*<input defaultValue={text} onChange={onChange} />*/}
            {/*) : (*/}
            {/*  <span onClick={() => onClickToModify(id)}>{text}</span>*/}
            <span>{text}</span>
            {/*)}*/}
            {/*</form>*/}
          </div>
        </div>
        <div className={"remove"} onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
