import Head from "next/head";
import s from "@/styles/Home.module.scss";
import BlogBrands from "@/components/BlockBrands";
import CarouseleContainer from "@/components/CarouseleContainer";
import Button from "@/components/UI/Button/Button";

const Home = () => (
  <div className={s.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <div className={s.homeContainer}>
      <div className={s.blockText}>
        <h1 className={s.titleText}>
          <span className={s.span}> HOUSE OF </span> GAMBLING
        </h1>

        <p>Raise your ROI with direct advertiser</p>
        <Button text="Become a Partner" style="btnPartner" />
      </div>
      <BlogBrands/>
   
    </div>
    <CarouseleContainer columns={9}/>
  </div>
);

export default Home;
