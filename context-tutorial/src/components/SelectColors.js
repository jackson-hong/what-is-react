import React, { Component } from "react";
import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//static contextType으로 정의하면 하나의 Context 밖에 사용하지 못하기 때문에
//useContext를 사용하는 쪽을 권함

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        {/*<ColorConsumer>*/}
        {/*  {({ actions }) => (*/}
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor()}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetColor(color);
              }}
              // onClick={() => actions.setColor(color)}
              // onContextMenu={(e) => {
              //   e.preventDefault();
              //   // 마우소 오른쪽 버튼 클릭시 메뉴가 뜨는 것을 무시함
              //   actions.setSubcolor(color);
              // }}
            />
          ))}
        </div>
        {/*)}*/}
        {/*</ColorConsumer>*/}
        <hr />
      </div>
    );
  }
}

export default SelectColors;
