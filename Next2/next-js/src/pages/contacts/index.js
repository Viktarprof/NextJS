import Heading from "../../../components/Heading";
import Head from "next/head";
import Link from "next/link";
// import { useState, useEffect } from "react";

 // разметка с самого сервера на FE
export const getStaticProps = async () => {
  const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
  const data = await response.json();
  // const data = null;

  if (!data){
    return {
      notFound: true
    }
  }

  return {
    props: { contacts: data },
  }
}

const Contacts = ({ contacts }) => {

  // разметка загрузится тоько на стороне FE на стороне сервера этой разметки нету

  // const [contacts, setContacts] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     setContacts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list: with props" />
      <ul>
        {contacts && contacts.map((el) => (
          <li key={el.id}>
            <Link href={`/contacts/${el.id}`}>Name users {el.name}</Link>
            <p>Email: {el.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Contacts;
