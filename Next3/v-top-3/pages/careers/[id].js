import JobItem from '@/components/JobItem'
import Head from 'next/head'
import React from 'react'
import { offerJob } from '@/pages/api/data/offer'

export async function getStaticPaths() {
    const paths = offerJob.map((el) => ({
      params: { id: el.id.toString() },
    }));

    return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
    const id = parseInt(params.id);
    const offerItem = offerJob.find((item) => item.id === id);

    return {
      props: {
        offerItem,
      },
    };
  }


function Job({ offerItem }) {
  return (
    <> 
        <Head>
            <title>Job: {offerItem.title}</title>
        </Head>
        <JobItem {...offerItem}/>
    </>
  )
}

export default Job