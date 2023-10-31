import Heading from "@/components/Heading";
import Head from "next/head";
import React from "react";
import s from "@/styles/ContactsUs.module.scss";
import FormContacts from "@/components/Form/FormContacts";

function ContactsUs() {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <>
        <Heading 
          tag="h4" 
          text="Contact us" 
          style="tagContactUs" />
        <div className={s.contactsUs}>
          <h4 className={s.headerContact}>Let’s start a conversation!</h4>
          <span className={s.span}>
            Would you like to start cooperation with MEGAPARTNERS in any field?
            Drop us a line!
          </span>
          <FormContacts />
        </div>
      </>
    </>
  );
}

export default ContactsUs;
