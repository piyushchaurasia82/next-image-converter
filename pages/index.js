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
        <title>Next Imge Converter</title>
        <meta name="description" content="Next Imge Converter" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://kit.fontawesome.com/ab8497c908.js" crossorigin="anonymous"></Script>
      </Head>

      <ImageUploader/>
      <Steps/>
      <Whyus/>
      {/* <Blogs/> */}
      <Gradientbanner/>
    </>
  )
}
