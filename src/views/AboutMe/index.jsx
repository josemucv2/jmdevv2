import React, { useState } from "react";
import Technology from "./Components/Technology";
import Experience from "./Components/Experience";
import { CV } from "../../constant";
import { useTranslation } from "react-i18next";
import s from "./style.module.css";

function AboutMe() {
  const { t } = useTranslation();
  const [viewExperience, setViewExperience] = useState(false);
  const changeView = () => {
    setViewExperience(!viewExperience);
  };
  return (
    <section className="h-full flex justify-between">
      <div
        className={`h-full lg:w-1/2 w-full mt-5 p-2 ${
          viewExperience && "hidden lg:inline"
        }`}
      >
        <div
          onClick={changeView}
          className={` ${s.button_change_views} lg:hidden inline ml-10`}
        >
          {t("changeViewExperience")}
        </div>
        <Technology setViewExperience={changeView} />
      </div>
      <div
        className={`${s.experience_container} lg:w-1/2 w-full mt-5  p-2 ${
          !viewExperience && "hidden lg:inline"
        }`}
      >
        <div
          onClick={changeView}
          className={` ${s.button_change_views} lg:hidden inline ml-10`}
        >
          {t("changeViewTech")}
        </div>
        {CV.map((element, index) => {
          return (
            <Experience
              setViewExperience={changeView}
              key={index}
              from={t(element.from)}
              yearFrom={element.yearFrom}
              to={t(element.to)}
              yearTo={element.yearTo}
              company={t(element.company)}
              jobTitle={t(element.jobTitle)}
              description={t(element.description)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AboutMe;
