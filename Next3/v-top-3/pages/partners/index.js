import FormReqis from "@/components/Form/FormReqis";
import React, { useState } from "react";
import s from "@/styles/Partners.module.scss";
import Image from "next/image";
import Select from "@/components/UI/Select/Select";
import logoAuthorization from "@/public/logo_authorization.png";
import { selectLanguage } from "@/pages/api/data/select";
import Button from "@/components/UI/Button/Button";

function Partners() {
  const [type, setType] = useState("login");

  return (
    <div className={s.partnerContainer}>
      <Image src={logoAuthorization} alt="logoAuthorization" width={300} />

      <Select 
        style="selectLanguage" 
        options={selectLanguage} />
      <div >
        <div className={s.btnsLoginRegister}>
          <Button
            text={"Войти как партнер"}
            style={ type === "login" ? "activelogin" : "btnlogin"}
            onClick={() => setType("login")}
          />
          <Button
            text={"Зарегистрироваться"}
            style={type === "login" ? "btnRegister": "activeRegister" }
            onClick={() => setType("register")}
          />
        </div>
        <FormReqis
          input={{
            email: "Email",
            firstPassword: "Пароль",
            secondPassword: "Подтверждение пароля",
            authenticator: "Код двухфакторной авторизации, если есть",
            nameCompany: "Название компании",
          }}
          setType={setType}
          button={{
            redirect: "Войти как партнер",
            submit: "Зарегистрироваться",
          }}
          type={type}
        />
      </div>
    </div>
  );
}

export default Partners;
