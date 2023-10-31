import React from "react";
import s from "@/styles/Form.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Textarea from "../UI/Textarea/Textarea";
import { useForm } from "react-hook-form";

function FormCV({ style }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={s[style]} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.userInfo}>
        <Input
          register={register}
          name="name"
          type="name"
          placeholder="Your name..."
          styles="inputsUser"
          title="Name:"
        />
        <Input
          type="email"
          placeholder="Your email..."
          styles="inputsUser"
          title="Email:"
          register={register}
          name="email"
        />
      </div>
      <Textarea
        type="text"
        placeholder="Tell us little about yourself..."
        styles="textarea"
        title="About yourself:"
        register={register}
        name="text"
      />
      <div className={s.userInfo}>
        <Input
          type="file"
          placeholder="Select file"
          style="inputsUser"
          title="Attach CV:"
          register={register}
          name="file"
        />
        <Button text="Send CV" style="sendCV" />
      </div>
    </form>
  );
}

export default FormCV;
