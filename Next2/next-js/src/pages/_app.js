import '@/styles/globals.scss'
import Layout from '../../components/Layout';
import Image from 'next/image';
import webDevImage from '../../public/webDev.png';
import Head from 'next/head';

 const MyApp = ({ Component, pageProps }) => (
   <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} /> 
    </main>
    <Image
      src={webDevImage}
      alt='preview'
      width={500}
      height={350}
      placeholder='blur'
    />
   </Layout>
 )
export default MyApp