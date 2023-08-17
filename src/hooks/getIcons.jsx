import { useRef, useMemo } from "react";
import Javascript from "../assets/icons/Javascript.svg";
import Python from "../assets/icons/Python.svg";
import Typescript from "../assets/icons/Typescript.svg";
import HTML from "../assets/icons/HTML.svg";
import CSS from "../assets/icons/CSS.svg";
import ReactIcon from "../assets/icons/React.svg";
import Vue from "../assets/icons/Vue.svg";
import Express from "../assets/icons/Express.svg";
import SQLAlchemy from "../assets/icons/SQLAlchemy.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import Nodejs from "../assets/icons/Node.svg";
import Git from "../assets/icons/Git.svg";
import Github from "../assets/icons/Github.svg";
import TailwindCSS from "../assets/icons/Tailwind.svg";
import Firebase from "../assets/icons/Firebase.svg";
import JQuery from "../assets/icons/Jquery.svg";
import Figma from "../assets/icons/Figma.svg";
import Bootstrap from "../assets/icons/Bootstrap.svg";
import Redux from "../assets/icons/Redux.svg";
import DigitalOcean from "../assets/icons/DigitalOcean.svg";

const useIcons = () => {
  const iconRef = useRef({
    Javascript: Javascript,
    Python: Python,
    Typescript: Typescript,
    HTML: HTML,
    CSS: CSS,
    ReactIcon: ReactIcon,
    Vue: Vue,
    Express: Express,
    SQLAlchemy: SQLAlchemy,
    MongoDB: MongoDB,
    Nodejs: Nodejs,
    Git: Git,
    Github: Github,
    TailwindCSS: TailwindCSS,
    Firebase: Firebase,
    JQuery: JQuery,
    Figma: Figma,
    Bootstrap: Bootstrap,
    Redux: Redux,
    DigitalOcean: DigitalOcean,
  });

  const getUseIcon = useMemo(() => {
    return (value) => {
      return iconRef.current[value];
    };
  }, [iconRef]);

  return { getUseIcon };
};

export default useIcons;
