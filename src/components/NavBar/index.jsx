import React from "react";
import { sideBarElement } from "../../constant/SideBar";
import { useTranslation } from "react-i18next";
import s from "./NavBar.module.css";
import configLangague from "../../i18n";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import exitMenu from "../../assets/icons/exit.svg";
import { Link } from "react-router-dom";

function NavBar({ viewMenu, changeViewMenu }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    var lang = "es";
    i18n.language === "es" ? (lang = "en") : (lang = "es");
    configLangague.changeLanguage(lang);
  };

  return (
    <header className="flex justify-between px-10 py-5 items-center">
      <h1>{t("name")}</h1>
      <nav className="flex space-x-10 items-center">
        <ul className="md:flex space-x-10 hidden">
          {sideBarElement.map((element, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              <Link to={element.route} title={`Ir a ${t(element.name)}`}>
                {t(element.name)}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className={`flex space-x-3 items-center  cursor-pointer ${s.translate}`}
          onClick={changeLanguage}
        >
          {i18n.language}
        </span>
        <img
          onClick={changeViewMenu}
          src={viewMenu ? exitMenu : burgerMenu}
          alt="Abrir o cerrar menu"
          width="30px"
          className="cursor-pointer inline md:hidden"
        />
      </nav>
    </header>
  );
}

export default NavBar;
