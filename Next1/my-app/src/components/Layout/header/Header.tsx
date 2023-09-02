import { FC } from "react";
import styles from './Header.module.scss'
import { useRouter } from "next/router";

const Header: FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  
  return (
    <header className={styles.header}>
      <a className={pathname === '/' ? styles.active : ''} href="/">Home</a>
      <a className={pathname === '/about' ? styles.active : ''}  href="/about">About</a>
    </header>
  );
};

export default Header;
