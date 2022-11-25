import React from "react";
import IngredientDetailsStyle from "./IngredientDetails.module.css";

const IngredientDetails = ({ data }) => {
  const Ingredient = (ingData) => {
    return (
      <li className={`${IngredientDetailsStyle.item}`}>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive pb-2`}
        >
          {ingData.text}
        </p>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive`}
        >
          {ingData.value}
        </p>
      </li>
    );
  }

  return (
    <div className={`${IngredientDetailsStyle.box}  pr-25 pb-15 pl-25`}>
      <img
        src={data.image_large}
        alt={data.name}
        className={IngredientDetailsStyle.img}
      />
      <p
        className={`${IngredientDetailsStyle.title} text text_type_main-medium pt-4`}
      >
        {data.name}
      </p>
      <ul className={`${IngredientDetailsStyle.listItems} pt-8`}>
        <Ingredient text="Калории,ккал" value={data.calories} />
        <Ingredient text="Белки, г" value={data.proteins} />
        <Ingredient text="Жиры, г" value={data.fat} />
        <Ingredient text="Углеводы, г" value={data.carbohydrates} />
      </ul>
    </div>
  );
}


export { IngredientDetails };