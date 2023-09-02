import Head from "next/head";
import styles from "../src/styles/Socials.module.scss";

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
      {socials && socials.map((el) => (
        <li key={el.id}>
          <a href={el.path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${el.icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Socials;