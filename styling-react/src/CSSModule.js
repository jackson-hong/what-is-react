import React from "react";
import style from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className={"something"}>CSS Module!</span>
    </div>
  );
};

export default CSSModule;
