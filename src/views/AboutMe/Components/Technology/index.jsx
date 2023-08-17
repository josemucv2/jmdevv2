import React from "react";
import s from "./style.module.css";
import { technologies } from "../../../../constant";
import useIcons from "../../../../hooks/getIcons";
import { useTranslation } from "react-i18next";

function Technology() {
  const { getUseIcon } = useIcons();
  const { t } = useTranslation();
  return (
    <div className="h-full overflow-auto space-y-5 px-10 py-5 flex flex-col">
      <span className="text-center">{t("initExplication")}</span>
      <div className={`mt-5 flex w-full  flex-wrap justify-center`}>
        {technologies.map((element, index) => {
          return (
            <div
              key={index}
              className={`${s.tech_container} flex flex-col justify-center items-center space-y-5 m-5  z-20`}
            >
              <img src={getUseIcon(element.icon)} alt="" width={"72px"} />
              <p>{element.label}</p>
            </div>
          );
        })}
      </div>
      <p className="text-center">{t("endExplication")}</p>
    </div>
  );
}

export default Technology;
