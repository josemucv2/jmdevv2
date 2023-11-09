import React from "react";
import s from "./Button.module.css";

function Button({ label, onClick, icon }) {
  return (
    <div className={`${s.butto_container} cursor-pointer`} onClick={onClick}>
      <div className="flex space-x-2">
        {icon && <img src={icon} alt="" width={"20px"} height={"20px"} />}
        <div>{label}</div>
      </div>
    </div>
  );
}

export default Button;
