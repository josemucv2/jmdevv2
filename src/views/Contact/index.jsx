import React, { useState } from "react";
import Input from "../../components/Input";
import Presentation from "../../components/Presentation";
import TextArea from "../../components/Textarea";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { sendEmail } from "../../services";
import { useNavigate } from "react-router-dom";
import { validateRequired } from "../../utils/validators";

function Contact() {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);
  const goPage = useNavigate();
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const action = () => {
    const submitErrors = {};

    submitErrors.name = validateRequired(t(initialState.name));
    submitErrors.email = validateRequired(t(initialState.email));
    submitErrors.subject = validateRequired(t(initialState.subject));
    submitErrors.message = validateRequired(t(initialState.message));

    const hasErrors = Object.values(submitErrors).some((err) => err !== "");

    if (!hasErrors) {
      if (true) {
        toast.error("No Disponible");
        return;
      }
      setLoader(true);
      const body = {
        from: initialState.email,
        subject: initialState.subject,
        text: initialState.message,
        name: initialState.name,
      };
      sendEmail(body)
        .then(() => {
          toast.success("Mensaje enviado con exito");
          goPage("/");
          setLoader(false);
        })
        .catch(({ response }) => {
          toast.error(response.data.message);
          setLoader(false);
        });
    } else {
      setErrors(submitErrors);
    }
  };

  const handlerInputchange = (e) => {
    const { name, value: targetValue } = e.target;

    setInitialState((prevState) => ({
      ...prevState,
      [name]: targetValue,
    }));
  };
  return (
    <>
      {loader && (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!loader && (
        <section className="h-full flex justify-between p-10">
          <div className="lg:w-1/2 w-full space-y-5 flex flex-col justify-center p-10">
            <Input
              label={t("nameInput")}
              placeholder={t("placeHolderName")}
              value={initialState.name}
              name="name"
              onChange={handlerInputchange}
              errors={errors.name}
            />
            <Input
              label={t("email")}
              placeholder={t("placeHolderEmail")}
              value={initialState.email}
              name="email"
              onChange={handlerInputchange}
              errors={errors.email}
            />
            <Input
              label={t("subject")}
              placeholder={t("placeHolderSubject")}
              value={initialState.subject}
              name="subject"
              onChange={handlerInputchange}
              errors={errors.subject}
            />
            <TextArea
              label={t("message")}
              value={initialState.message}
              placeholder={t("placeHolderMessage")}
              name="message"
              onChange={handlerInputchange}
              errors={errors.message}
            />
            <div className="w-1/3 m-auto">
              <Button label={t("send")} onClick={action} />
            </div>
          </div>
          <div className="w-1/2 m-auto hidden lg:inline">
            <Presentation contact />
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
