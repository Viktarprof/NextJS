import React, { useRef } from "react";
import s from "@/styles/FormRegis.module.scss";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";
import Link from "next/link";

function FormReqis(props) {
  const { link, button, input, infoText, type, setType } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailElem = register("email", {
    required: "не может быть пустым",
    pattern: {
      value:
        /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: "Неверный email.",
    },
  });

  const passwordElem = register("password", {
    required: "не может быть пустым",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Неверный пароль.",
    },
  });

  const secondPasswordElem = register("password", {
    required: "не может быть пустым",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Пароль должен содержать 8 букв и 1 цифру",
    },
  });

  const codeElem = register("text", {
    required: "не может быть пустым",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Неверный код 2FA.",
    },
  });

  const companyNameElem = register("companyName", {
    required: "не может быть пустым",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/,
      message: "Короткое название",
    },
  });
  const checkboxElem = register("checkbox", {
    required: "необходимо согласие",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={s.titleInput}>{input.email}</p>
      <Input
        type={emailElem.name}
        name={emailElem.name}
        placeholder="user@example.com"
        styles={"inpurAutoriz"}
        register={register}
      />
      {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}

      <p className={s.titleInput}>{input.firstPassword}</p>
      <Input
        type={passwordElem.name}
        name={passwordElem.name}
        styles={"inpurAutoriz"}
        register={register}
      />
      {errors.password && (
        <p className={s.warning_text}>{errors.password.message}</p>
      )}

      {type === "register" && (
        <>
          <p className={s.titleInput}>{input.secondPassword}</p>
          <Input
            type="password"
            name={secondPasswordElem.name}
            styles={"inpurAutoriz"}
            register={register}
          />
          {errors.password && (
            <p className={s.warning_text}>{errors.password.message}</p>
          )}
        </>
      )}

      {type === "register" && (
        <>
          <p className={s.titleInput}>{input.nameCompany}</p>
          <Input
            type="text"
            name={companyNameElem.name}
            styles={"inpurAutoriz"}
            register={register}
          />
          {errors.password && (
            <p className={s.warning_text}>{errors.companyName.message}</p>
          )}

          <div className={s.checkboxContainer}>
            <Input
              type={checkboxElem.name}
              name={checkboxElem.name}
              styles={"inpurCheckbox"}
              register={register}
            />
            <p className={s.titleInput}>
              Я согласен с
              <Link href="https://backoffice.megapartners.io/partner/terms-and-conditions">
                <span>правилами и условиями</span>
              </Link>
            </p>
          </div>
          {errors.checkbox && (
            <p className={s.warning_text}>{errors.checkbox.message}</p>
          )}
        </>
      )}

      {type === "login" && (
        <>
          <p className={s.titleInput}>{input.authenticator}</p>
          <Input
            type={codeElem.name}
            name={codeElem.name}
            placeholder="2fa code"
            styles={"inpurAutoriz"}
            register={register}
          />
          {errors.text && (
            <p className={s.warning_text}>{errors.text.message}</p>
          )}
        </>
      )}
      <Button
        style={"btnSubmite"}
        text={type === "register" ? button.submit : button.redirect}
      />

      {type === "register" ? (
        <p
          style={{ fontWeight: 400, padding: "0px 0 20px 25px" }}
          className={s.titleInput}
        >
          Уже зарегистрировались?{" "}
          <span onClick={() => setType("login")}>Войти в аккаунт</span>
        </p>
      ) : (
        <p
          style={{ fontWeight: 400, padding: "0px 0 20px 25px" }}
          className={s.titleInput}
        >
          <span>Сменить пароль</span> или{" "}
          <span onClick={() => setType("register")}>Зарегистрироваться</span>
        </p>
      )}
    </form>
  );
}

export default FormReqis;
