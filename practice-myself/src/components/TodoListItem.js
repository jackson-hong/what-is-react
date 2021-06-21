import React, {useCallback, useState} from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
    MdSettings
} from "react-icons/md";
import {BiAdjust} from 'react-icons/bi'
import cn from 'classnames'
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, onModify, onModifyEnd, style}) => {
    const {text, checked, id, modify} = todo;
    const [value, setValue] = useState(text);
    return (
        <div className={"TodoListItem-virtualized"} style={style} >
            <div className={"TodoListItem"}>
                <div className={cn('checkbox', {checked})} >
                    <div onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    </div>
                    {modify ? (
                        <form onSubmit={(e) => {
                            onModifyEnd(id, value);
                            console.log('jackson')
                            e.preventDefault();
                        }}><input value={value}
                               onChange={(e) => {
                        setValue(e.target.value)}
                    }/><button className={"submitBtn"} type={"submit"}>수정완료</button> </form>) : <div className={"text"}>{text}</div>}
                </div>
                <div className={"remove"} onClick={() => {
                    onModify(id)
                }}>
                    <MdSettings />
                </div>
                <div className={"remove"} onClick={() => {
                    onRemove(id)
                }}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);
