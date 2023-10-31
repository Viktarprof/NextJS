import React from "react";
import s from "@/styles/Form.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import Textarea from "../UI/Textarea/Textarea";
import { selectJob } from '@/pages/api/data/select';
import { useForm } from "react-hook-form";

function FormContacts() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.userInfo}>
      <Input
        type="name"
        placeholder="Your name..."
        styles="inputsUser"
        title='Name:'
        register={register}
        name="name" 
      />
       <Input
        type="email"
        placeholder="Your email..."
        styles="inputsUser"
        title="Email:"
        register={register} 
        name="email" 
      />
        <Select
          styles="selectUser"
          title='Subject:'
          options={selectJob}
          register={register}
          name="selectUser" 
          />
      </div>
      <Textarea 
        type="text" 
        placeholder="Message..." 
        styles="textarea"
        title='Message:'
        register={register}
        name="text"
        />
      <Button 
        text="Send a message" 
        style="sendMessage" />
    </form>
  );
}

export default FormContacts;
