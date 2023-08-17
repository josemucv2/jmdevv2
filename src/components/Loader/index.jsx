import React from "react";
import s from "./style.module.css";

function Loader() {
  return (
    <div class={s.lds_facebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
