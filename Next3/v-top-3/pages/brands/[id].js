import BrandInfo from '@/components/BrandInfo';
import Head from 'next/head';
import React from 'react';
import { blogData } from "@/pages/api/data/blog";


export async function getStaticPaths() {
    const paths = blogData.map((el) => ({
      params: { id: el.id.toString() },
    }));

    return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
    const id = parseInt(params.id);
    const brand = blogData.find((item) => item.id === id);

    return {
      props: {
        brand,
      },
    };
  }

function Brand({ brand }) {
  
  return (
    <>
    <Head>
      <title>Brand</title>
    </Head>
    <BrandInfo {...brand}/>
  </>
  )
}

export default Brand