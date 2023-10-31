import Image from "next/image";
import s from "@/styles/Heading.module.scss";

function Heading({ 
  tag, 
  text, 
  image, 
  info, 
  width, 
  style }) {
  const Tag = tag || "h1";

  return (
    < >
      {image && 
        <Image 
          src={image} 
          alt={text} 
          width={width}/>}
      {text && 
        <Tag 
          className={` ${s[style]}`}>{text}</Tag>}
      {info && 
        <Tag 
          className={` ${s[style]}`}>{info}</Tag>}
    </>
  );
}

export default Heading;
