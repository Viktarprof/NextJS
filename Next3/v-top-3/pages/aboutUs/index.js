import Heading from '@/components/Heading'
import Head from 'next/head'
import React from 'react'
import image from '@/public/aboutUs.jpeg'

function AboutUs() {
  return (
    <>
        <Head>
            <title>About Us</title>
        </Head>
        <Heading 
        text='In this page you can red about compony' 
        style="heading" 
        image={image} />

    </>
  )
}

export default AboutUs
