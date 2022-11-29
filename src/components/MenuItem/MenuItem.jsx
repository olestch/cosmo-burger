import React from "react";
import menuItemStyle from "./MenuItem.module.css"

const MenuItem = (props) => {
    return (
      <div className={props.itemStyle}>
        <a href={props.link} className={`${menuItemStyle.link}`}>
          {props.icon}
          <p className={props.styleText}>{props.text}</p>
        </a>
      </div>
    );
}

export { MenuItem };