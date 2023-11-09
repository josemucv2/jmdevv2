/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
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
      <img
        src={PhotoJose}
        className="z-20 rounded-full "
        width={"250px"}
        height={"250px"}
        alt="Jose Martinez"
      />

      <div className="flex flex-col justify-center items-center space-y-10  md:w-1/4 w-full">
        <div className="space-y-1 flex flex-col justify-center items-center">
          <h2 className="font-semibold">{t("name")}</h2>
          <p>{t("proffesion")}</p>
        </div>

        <div className="flex space-x-3 items-center">
          <Link to={RRSS_INSTAGRAM}>
            <img
              src={ig}
              alt="instagram"
              className="mt-1 cursor-pointer"
              width={"30px"}
              height={"30px"}
            />
          </Link>
          <Link to={RRSS_LINKEDIN}>
            <img
              src={linkedin}
              alt="linkedin"
              className="cursor-pointer"
              width={"30px"}
              height={"30px"}
            />
          </Link>
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
