import React from "react";
import { data } from "../../utils/data";
import PropTypes from "prop-types";
import burgerConstructorStyle from "./BurgerConstructor.module.css";
import { Constructor } from "./Constructor/Constructor";
import { LargeButton } from "./LargeButton/LargeButton";
import { Price } from "./Price/Price";

const BurgerConstructor = (props) => {
  return (
    <section className={`${burgerConstructorStyle.box} ml-10`}>
      <Constructor data={data} />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <Price price={Number(24568)} />
        <LargeButton text={"Оформить заказ"} open={props.open} />
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  open: PropTypes.func.isRequired,
};

export {BurgerConstructor};