import React from "react";
import PropTypes from "prop-types";
import { ingredients } from "../../../utils/ingredients";
import functionStyle from "./CardFunction.module.css";
import { Card } from "../Card/Card";

const CardFunction = ({ data, callback }) => {
  return data.map((ingredients) => {
    return (
      <li key={ingredients._id} onClick={() =>{callback(ingredients)}} className={functionStyle.item}>
        <Card image={ingredients.image} name={ingredients.name} price={ingredients.price} />
      </li>
    );
  });
}

CardFunction.propTypes = {
  data: PropTypes.arrayOf(ingredients.isRequired).isRequired,
  callback: PropTypes.func.isRequired,
};

export { CardFunction };