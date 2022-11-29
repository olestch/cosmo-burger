import React from "react";
import PropTypes from "prop-types";

const IngredientSection = (props) => {
  return <section className={props.style}>{props.children}</section>;
}

IngredientSection.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { IngredientSection };