import Head from 'next/head'
import Script from 'next/script'
import ImageUploader from '../components/home/imageUploader'
import Steps from '../components/home/steps'
import Whyus from '../components/home/whyus'
import Blogs from '../components/home/blogs'
import Gradientbanner from '../components/home/gradientbanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextConvert</title>
        <meta name="description" content="Convert any image format for free with NextConvert. Fast, easy, and reliable online tool to transform your images into the desired format in just a few clicks. No registration required. Try it now!"/>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script src="https://kit.fontawesome.com/ab8497c908.js" crossorigin="anonymous"></Script>
      <ImageUploader/>
      <Steps/>
      <Whyus/>
      {/* <Blogs/> */}
      <Gradientbanner/>
    </>
  )
}
