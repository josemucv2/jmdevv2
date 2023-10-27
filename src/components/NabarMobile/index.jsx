import React from "react";
import s from "./style.module.css";
import { sideBarElement } from "../../constant/SideBar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function NavBarMobile({ setViewMenu }) {
  const { t } = useTranslation();
  const goPage = useNavigate();

  const changeRoute = (route) => {
    goPage(route);
    setViewMenu();
  };
  return (
    <ul className={`${s.container_mobile_menu} p-10 space-y-5`}>
      {sideBarElement.map((element, index) => {
        return (
          <li key={index} onClick={() => changeRoute(element.route)}>
            {t(element.name)}
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarMobile;
