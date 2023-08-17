import React from "react";
import { sideBarElement } from "../../constant/SideBar";
import { useTranslation } from "react-i18next";
import s from "./NavBar.module.css";
import configLangague from "../../i18n";
import { useNavigate } from "react-router-dom";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import exitMenu from "../../assets/icons/exit.svg";

function NavBar({ viewMenu, changeViewMenu }) {
  const { t, i18n } = useTranslation();
  const goPage = useNavigate();

  const changeLanguage = () => {
    var lang = "es";
    i18n.language === "es" ? (lang = "en") : (lang = "es");
    configLangague.changeLanguage(lang);
  };

  return (
    <div className="flex justify-between px-10 py-5 items-center ">
      <div>{t("name")}</div>
      <div className="flex space-x-10 items-center">
        <div className="md:flex space-x-10 hidden">
          {sideBarElement.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => goPage(element.route)}
                className="cursor-pointer hover:underline"
              >
                {t(element.name)}
              </div>
            );
          })}
        </div>
        <div className="flex space-x-3 items-center">
          <div
            className={`${s.translate} cursor-pointer`}
            onClick={changeLanguage}
          >
            {i18n.language}
          </div>
          {!viewMenu && (
            <img
              onClick={changeViewMenu}
              src={burgerMenu}
              alt=""
              width="30px"
              className="inline md:hidden cursor-pointer"
            />
          )}
          {viewMenu && (
            <img
              onClick={changeViewMenu}
              src={exitMenu}
              alt=""
              width="30px"
              className="inline md:hidden cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
