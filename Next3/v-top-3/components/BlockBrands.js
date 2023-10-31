import s from "@/styles/BlockBrand.module.scss";
import Link from "next/link";
import { blogData } from '@/pages/api/data/blog'

function BlogBrands() {

  return (
    <div className={s.blockContainer}>
      <div className={s.scrollContainer}>
      <div className={s.scroll}>
          {blogData.map((el) => (
            <div className={s.item} key={el.id}>
              <Link href={`/brands/${el.id}`}>{el.title}</Link>
              <p className={s.date}>{el.dateTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogBrands;
