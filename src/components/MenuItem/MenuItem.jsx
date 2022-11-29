import React from "react";
import PropTypes from "prop-types";
import menuItemStyle from "./MenuItem.module.css";

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

MenuItem.propTypes = {
  itemStyle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  styleText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export { MenuItem };