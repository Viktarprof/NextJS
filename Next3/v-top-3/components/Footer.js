import React from "react";
import s from "@/styles/Footer.module.scss";
import Image from "next/image";
import logoMegapartners from "@/public/logoMegapartners.png";
import maltaGaming from "@/public/maltaGaming.png";
import CURACAO from "@/public/CURACAO.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { socials } from "@/pages/api/data/socials";
import { footerPages } from '@/pages/api/data/pages'


function Footer() {
  const { pathname } = useRouter();
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.logoCompanys}>
          <Image src={logoMegapartners} alt="logoMegapartners" />
          <div className={s.otherConpony}>
            <Image
              src={maltaGaming}
              alt="maltaGaming"
              width={140}
              height={40}
            />
            <Image src={CURACAO} alt="CURACAO" />
          </div>
        </div>
        <div className={s.blockPages}>
          <div className={s.pages}>
            {footerPages.map((page) => (
              <Link key={page.id} href={page.path}>
                <p className={pathname === page.path ? s.active : s.text}>
                  {page.title}
                </p>
              </Link>
            ))}
          </div>
          <div>
            <p className={s.copiring}>Copyright © 2023 Megapartners.io</p>
          </div>
        </div>
        <div className={s.logoContainer}>
          <p className={s.text}>Our social media:</p>
          <div className={s.socialLogo}>
       
            {socials.map((logo) => (
              <Image
                className={s.logo}
                key={logo.id}
                src={logo.icon}
                alt={logo.title}
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
