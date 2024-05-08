import React from "react";
import style from "./Typography.module.css";

const Typography = ({ element = "p", type, className, children }) => {
  const Element = element;

  return (
    <Element className={style[type] + ` ${className ? className : ""}`}>
      {children}
    </Element>
  );
};

export default Typography;
