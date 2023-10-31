import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import s from "@/styles/Nav.module.scss";
import { navLinks } from '@/pages/api/data/pages'


function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className={s.nav}>
      {navLinks.map((link) => (
        <Link key={link.id} href={link.path}>
          <p className={pathname === link.path ? s.active : s.text}>
            {link.title}
          </p>
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
