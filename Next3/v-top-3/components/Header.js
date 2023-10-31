import React, { useState } from "react";
import Nav from "./Nav";
import s from "@/styles/Header.module.scss";
import Image from "next/image";
import logo from "@/public/logoMegapartners.png";
import Button from "./UI/Button/Button";
import { GrLanguage } from "react-icons/gr";

function Header() {
  const [language, setlanguage] = useState("EN");
  const toggleLanguage = () => {
    setlanguage(language === "EN" ? "RUS" : "EN");
  };

  return (
    <header className={s.header}>
      <Image src={logo} alt="logo Megapartners" width={287} />
      <Nav />
      <div className={s.blockBtns}>
        <div className={s.btnItem}>
          <GrLanguage className={s.languageIcon} />
          <Button style='btn' text={language} onClick={toggleLanguage} />
        </div>
        <div className={s.btnItem}>
          <Button style='btn' text='LOG IN' />
        </div>
        <div className={s.btnItem}>
          <Button style='btn' text='SIGN UP' />
        </div>
      </div>
    </header>
  );
}

export default Header;
