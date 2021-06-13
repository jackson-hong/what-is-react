import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickName, setNickname] = useState("");

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  // const onChange = (e) => {
  //   // console.log(e.target);
  //   dispatch(e.target);
  // };

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다.");
  //   // console.log({ name, nickName });
  // }, [name, nickName]);
  //
  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  // }, []);
  //
  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);
  //
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };
  return (
    <div>
      <div>
        <input name={"name"} value={name} onChange={onChange} />
        <input name={"nickname"} value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

//왜 name을 사용해서 지정해줘야 하는가

export default Info;
