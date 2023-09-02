import Layout from '@/components/Layout/Layout';
import { NextPages } from 'next';
import Head from 'next/head';
import Image from 'next/image';



const NotFound: NextPages = () => {
  return (
    <Layout>
        <Head>
            <title>Not Found</title>
        </Head>
      <div style={{textAlign:"center"}}>
        <Image priority src='/404.png' alt='' width={700} height={500}/>
      </div>
    </Layout>
  )
}

export default NotFound