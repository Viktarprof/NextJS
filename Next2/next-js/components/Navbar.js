import Link from "next/link";
import styles from "../src/styles/Navbar.module.scss";
import { useRouter } from "next/router";
import path from "path";
import Image from "next/image";


const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {

    const {pathname} = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/logo.webp' alt="web" width={60} height={60}/>
        </div>
      <div className={styles.links}>
        {navigation.map((el) => (
            <Link 
                key={el.id} 
                href={el.path}>
                   <p className={pathname === path ? styles.active : null}> {el.title}</p>
            </Link>))}
      </div>
    </nav>
  );
};
export default Navbar;
