import ContactInfo from "../../../components/ContactInfo";
import Heading from "../../../components/Heading";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  console.log(context);
  const {id} = context.params;
  const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
  const data = await response.json();
  // const data = null;

  if (!data){
    return {
      notFound: true
    }
  }

  return {
    props: { contact: data },
  }
}

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact}/>
  </>
);
export default Contact;
