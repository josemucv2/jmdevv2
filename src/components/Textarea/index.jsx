import React from "react";
import s from "./style.module.css";
import { useTranslation } from "react-i18next";

function TextArea({ label, onChange, value, placeholder, name, errors }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <label className={s.label}>{label}</label>
      <textarea
        className={`${s.input_container} ${s.textarea_container} ${
          errors && s.input_container_errors
        }`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      <div className={s.error_message}>{t(errors)}</div>
    </div>
  );
}

export default TextArea;
