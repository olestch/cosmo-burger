import React from "react";
import PropTypes from "prop-types";
import ingredientsBoxStyle from "./IngredientsBox.module.css";

const IngredientsBox = (props) => {
  return (
    <article>
      <h2
        ref={props.tabRef}
        className={`${ingredientsBoxStyle.subtitle} text text_type_main-medium pb-2 pt-5`}
      >
        {props.text}
      </h2>
      <ul className={`${ingredientsBoxStyle.items}`}>{props.children}</ul>
    </article>
  );
}

IngredientsBox.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export { IngredientsBox };