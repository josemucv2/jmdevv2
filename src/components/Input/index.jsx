import React from "react";
import s from "./style.module.css";
import { useTranslation } from "react-i18next";

function Input({ label, onChange, value, placeholder, name, errors }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col">
        <label className={s.label}>{label}</label>
        <input
          type="text"
          className={`${s.input_container} ${errors && s.imput_border_error}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
      <div className={s.error_message}>{t(errors)}</div>
    </div>
  );
}

export default Input;
