import Head from "next/head";
import { blogData } from "@/pages/api/data/blog";
import Link from "next/link";
import s from "@/styles/BrandInfo.module.scss";
import Heading from "@/components/Heading";



function Brands() {

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const newDate = blogData.map((el) => {
    const [month, day, year] = el.dateTime.split('-');
    if (el.dateTime) {
      return `${year}-${month}-${day}`;
    } else {
      const today = new Date();
      const formattedDate = 
        `${today.getUTCDay()}-${today.getMonth() +1}-${today.getFullYear()}`;
      return formattedDate;
    }
  });

  return (
    <>
      <Head>
      <title>Brands</title>
      </Head>
      <Heading text={"BRANDS"} tag="h4" style="tagBrandsHead" />
      <div className={s.brandContainer}>
        {blogData.map((el, i) => (
         <div className={s.item}>
         <Link className={s.title} href={`brands/${el.id}`}> {el.title}</Link>
          <p className={s.dateTime}> {newDate[i]}</p>
         </div>
        ))}
      </div>
    </>
  );
}

export default Brands;
