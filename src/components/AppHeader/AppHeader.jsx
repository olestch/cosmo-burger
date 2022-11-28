import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyle from "./AppHeader.module.css";

const  AppHeader = () => {
  
  const MenuItem = (props) => {
    return (
      <div className={props.itemStyle}>
        <a href={props.link} className={`${appHeaderStyle.link}`}>
          {props.icon}
          <p className={props.styleText}>{props.text}</p>
        </a>
      </div>
    );
  }
  return (
    <header className={`${appHeaderStyle.header}`}>
      <nav className={`${appHeaderStyle.navbar}`}>
        <ul className={`${appHeaderStyle.menu}`}>
          <li className={appHeaderStyle.menuList}>
            <MenuItem
              text="Конструктор"
              link={"#"}
              icon={<BurgerIcon type="primary" />}
              itemStyle={`${appHeaderStyle.menuItems} mt-4 mb-4 pl-1 pt-4 pb-4 pr-5 mr-2`}
              styleText={`text text_type_main-default pl-2`}
            />
          </li>
          <li className={appHeaderStyle.menuList}>
            <MenuItem
              text="Лента заказов"
              link={"#"}
              icon={<ListIcon type="secondary" />}
              itemStyle={`${appHeaderStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4 pr-3`}
              styleText={`text text_type_main-default text_color_inactive pl-2`}
            />
          </li>
        </ul>
        <MenuItem
          link={"#"}
          icon={<Logo />}
          itemStyle={`${appHeaderStyle.logo}`}
        />
        <MenuItem
          text="Личный кабинет"
          link={"#"}
          icon={<ProfileIcon type="secondary" />}
          itemStyle={`${appHeaderStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4`}
          styleText={`text text_type_main-default text_color_inactive pl-2`}
        />
      </nav>
    </header>
  );
}

export {AppHeader};