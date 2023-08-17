/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PhotoJose from "../../assets/img/Jose.png";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import ig from "../../assets/icons/ig.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import whaIcon from "../../assets/icons/whaIcon.svg";
import { NUMBER_PHONE, RRSS_INSTAGRAM, RRSS_LINKEDIN } from "../../constant";

function Presentation({ contact }) {
  const { t } = useTranslation();
  const goPage = (page) => {
    window.open(page, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-10 ">
      <img src={PhotoJose} className="z-20 rounded-full	" width={"250px"} />
      <div className="flex flex-col justify-center items-center space-y-10  md:w-1/4 w-full">
        <div className="space-y-1 flex flex-col justify-center items-center">
          <div className="font-semibold">{t("name")}</div>
          <div>{t("proffesion")}</div>
        </div>
        <div className="flex space-x-3 items-center">
          <img
            src={ig}
            alt=""
            className="mt-1 cursor-pointer"
            onClick={() => goPage(RRSS_INSTAGRAM)}
          />
          <img
            src={linkedin}
            alt=""
            onClick={() => goPage(RRSS_LINKEDIN)}
            className="cursor-pointer"
          />
        </div>
        <div
          className={`w-full px-5 lg:px-0 z-20 ${
            contact ? "lg:w-full" : "lg:w-1/2"
          }`}
        >
          <Button
            label={t("contactMe")}
            onClick={() => goPage(`https://wa.me/${NUMBER_PHONE}`)}
            icon={whaIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
