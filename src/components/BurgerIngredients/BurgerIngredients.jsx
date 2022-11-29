import React from "react";
import burgerIngredientsStyle from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredients } from "../../utils/ingredients";
import { IngredientSection } from "./IngredientSection/IngredientSection";
import { CardFunction } from "./CardFunction/CardFunction";
import { IngredientsBox } from "./IngredientsBox/IngredientsBox";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = (props) => {
  const bunRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const sauceRef = React.useRef(null);

  function IngredientsTabs(props) {
    const [current, setCurrent] = React.useState("bun");
    const scrollTab = (e, tab) => {
      setCurrent(e);
      tab.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div className={props.tabStyle}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTab(e, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTab(e, sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTab(e, mainRef)}
        >
          Начинки
        </Tab>
      </div>
    );
  }

  const getArr = props.data;

  const bunArr = getArr.filter((item) => item.type === "bun");
  const mainArr = getArr.filter((item) => item.type === "main");
  const sauceArr = getArr.filter((item) => item.type === "sauce");

  return (
    <IngredientSection sectionStyle={`${burgerIngredientsStyle.section} mt-10`}>
      <h1 className={`${burgerIngredientsStyle.title} text text_type_main-large mt-5 mb-5`}>Соберите бургер</h1>
      <IngredientsTabs 
        tabStyle={`${burgerIngredientsStyle.tab} mb-5`} 
        banRef={bunRef}
        sauceRef={sauceRef}
        mainRef={mainRef}
      />
      <div className={`${burgerIngredientsStyle.ingredientsList}`}>
        <IngredientsBox text="Булки" tabRef={bunRef}>
          <CardFunction data={bunArr} callback={props.open} />
        </IngredientsBox>
        <IngredientsBox text="Соусы" tabRef={sauceRef}>
          <CardFunction data={sauceArr} callback={props.open} />
        </IngredientsBox>
        <IngredientsBox text="Начинки" tabRef={mainRef}>
          <CardFunction data={mainArr} callback={props.open} />
        </IngredientsBox>
      </div>
    </IngredientSection>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredients.isRequired).isRequired,
  open: PropTypes.func.isRequired,
};

export { BurgerIngredients };