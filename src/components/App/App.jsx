import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import appStyle from "./App.module.css";
import { getData } from "../../utils/api";

const App = () => {
  const [ingredientModal, setIngredientModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);


  const [data, setData] = useState({
    isLoading: false,
    hasError: false,
    data: [],
    error: "",
  });

  useEffect(() => {
    setData({ ...data, hasError: false, isLoading: true, error: "" });
    getData()
      .then((res) => {
        setData({ ...data, data: res.data, isLoading: false, error: "" });
      })
      .catch((err) => {
        setData({ ...data, hasError: true, isLoading: false, error: err });
      });
  }, []);

  const closePopup = () => {
    setIngredientModal(false);
    setOrderModal(false);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };

  const openIngredientModal = (ingredient) => {
    setCurrentIngredient(ingredient);
    setIngredientModal(true);
  };

  return (
    <div className="page">
      <AppHeader />
      <main className={appStyle.main}>
        {data.isLoading === true && (
        <h1 className={appStyle.message}>{`Загрузка...`}</h1>
      )}
        {data.hasError && `Упс, что-то пошло не так, произошла ошибка ${data.error}`}
        {!data.isLoading && !data.hasError && (
          <>
            <BurgerIngredients
              data={data.data}
              open={openIngredientModal}
            />
            <BurgerConstructor open={openOrderModal} data={data.data}/>
          </>
        )}
      </main>
      {ingredientModal && (
        <Modal text="Детали ингредиента" close={closePopup}>
          <IngredientDetails data={currentIngredient} />
        </Modal>
      )}
      {orderModal && (
        <Modal close={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export { App };