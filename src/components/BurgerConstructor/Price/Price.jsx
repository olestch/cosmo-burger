import React from "react";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyle from "./Price.module.css";

const Price = (props) => {
  return (
    <div className={`${priceStyle.price} pr-2`}>
      <p className="text text_type_digits-medium pr-2 pl-2">{props.price}</p>
      <CurrencyIcon />
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export { Price };
