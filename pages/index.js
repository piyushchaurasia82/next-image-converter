import Head from 'next/head'
import Script from 'next/script'
import ImageUploader from '../components/home/imageUploader'
import Steps from '../components/home/steps'
import Whyus from '../components/home/whyus'
import Blogs from '../components/home/blogs'
import Gradientbanner from '../components/home/gradientbanner'
import TransformImage from '../components/home/TransformImage'
import Tools from '../components/home/Tools'
import ChangeImageBlog from '../components/home/ChangeImageblog'
import Stepthree from '../components/home/stepthree'
import Trustpilot from '../components/home/Trustpilot'

export default function Home() {
  return (
    <>
      <Head>
        <title>Transform Images Effortlessly: online image converter</title>
        <meta name="description" content="Your Free Online Image Converter Convert any image format for free with NextConvert. Fast, easy, and reliable online tool to transform your images into the desired format in just a few clicks. No registration required. Try it now! NextConvert offers a seamless solution to transform your images hassle-free. With our free online image converter, unlock the power to switch formats effortlessly." />
        <meta name="trustpilot-one-time-domain-verification-id" content="ed91edf4-8621-4f41-bba7-341e043c3e39"/>
        <link rel="canonical" href="https://nextconvert.in/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="google-adsense-account" content="ca-pub-5491129078114909" />
        <meta name="google-site-verification" content="K8Mntu3yG-MQFBwGcLGC9s8roRtf6bT1_ZXqsn_IH8U" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5491129078114909"
          crossorigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G50ERRPLJ3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G50ERRPLJ3', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Script src="https://kit.fontawesome.com/ab8497c908.js" crossOrigin="anonymous"></Script>
      <ImageUploader />
      <Stepthree />
      <Trustpilot/>
      <Steps />
      <ChangeImageBlog/>
      <Tools />
      <TransformImage />
      <Whyus />
      {/* <Blogs/> */}
      <Gradientbanner />
      
    </>
  )
}
