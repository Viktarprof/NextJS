import s from "@/styles/Career.module.scss";
import Heading from "@/components/Heading";
import Head from "next/head";
import image from "@/public/logoMegapartners.png";
import CarouselContainer from "@/components/CarouseleContainer";
import { offer, offerJob } from "@/pages/api/data/offer";
import ImageSvg from "@/components/Svg/ImageSvg";
import { svg } from '@/pages/api/data/svg'
import Button from "@/components/UI/Button/Button";
import { VscLocation } from "react-icons/vsc";
import { WiTime4 } from "react-icons/wi";
import FormCV from "@/components/Form/FormCV";
import Link from "next/link";

function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
      </Head>
      <div className={s.careersContainer}>
        <div className={s.title}>
          <div className={s.carousel}>
            <CarouselContainer
              style="carouseleCareers" 
              columns={1} />
          </div>
            <Heading
              tag="h2"
              style="tagStyle"
              width={950}
              image={image}
              info={"Make yourself at home"}
            />
            <div className={s.carousel}>
              <CarouselContainer 
                style="carouseleCareers" 
                columns={1} />
            </div>
        </div>

        <Heading 
          tag="h4" 
          style="tagStyle" 
          width={950} info={"What we offer?"}/>
          <div className={s.offerList}>
            {offer.map((el) => (
              <div className={s.card} key={el.id}>
                <div className={s.coinContainer}>
                  <ImageSvg svg={svg}/>
                  <p>{el.id}</p>
                </div>
                <div className={s.text}>
                  <h5 className={s.titleCard}>{el.title}</h5>
                  <p>{el.info}</p>
                </div>
              </div>
            ))}
          </div>
        <Heading 
          tag="h4" 
          style="tagStyle" 
          width={950}
          info={"Open positions"}/>
          <div className={s.positionList}>
            <div className={s.position}>
              <Button style="btnPosition" text="View All" />
              <Button style="btnPosition" text="IT" />
            </div>
            <div className={s.jobList}>
              {offerJob.map((el) => (
                <div className={s.cardJob}>
                  <Link href={`careers/${el.id}`}><h4>{el.title}</h4></Link>
                  <div className={s.shortInfoList}>
                    <div className={s.shortCard}>
                      <VscLocation />
                      <p>{el.location}</p>
                    </div>
                    <div className={s.shortCard}>
                      <WiTime4 />
                      <p>{el.timeWork}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Heading
              tag="h4"
              style="tagStyle"
              width={950}
              info={"There is no suitable vacancy?"}
            />
            <Heading
              tag="p"
              style="paragraphStyle"
              width={100}
              info={"Send us your CV and we will contact you."}
            />
            <div className={s.formContainer}>
              <FormCV style='formCV'/>
            </div>
          </div>
      </div>
    </>
  );
}

export default Careers;
