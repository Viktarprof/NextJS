import Heading from "@/components/Heading";
import Head from "next/head";
import React, { useState } from "react";
import s from "@/styles/Commissions.module.scss";
import CommissionsOffers from "@/components/CommissionsOffers";
import { commissions } from "@/pages/api/data/commissions";
import FormReqis from "@/components/Form/FormReqis";

function Commissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Commissions</title>
      </Head>
      <div className={s.commissionsContainer}>  
      <>
        <Heading text={"Commissions"} style="tagCommitions" />
        <Heading
          tag="p"
          info={
            "We have calculated and selected different types of commissions so that you can always choose the most profitable option for yourself."
          }
          style="paragraphStyle"
        />
        <CommissionsOffers
          commissions={commissions}
          setIsModalOpen={setIsModalOpen}
        />
      </>
       
      </div>
    </>
  );
}

export default Commissions;
