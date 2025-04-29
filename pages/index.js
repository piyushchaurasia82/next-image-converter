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
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//www.highperformanceformat.com/bb40115077e2567015a882f7c822480f/invoke.js'
    document.body.appendChild(script)

    const adContainer = document.createElement('div')
    adContainer.id = 'ad-container'
    document.body.appendChild(adContainer)

    // Adsterra requires this object to be defined globally
    window.atOptions = {
      'key': 'bb40115077e2567015a882f7c822480f',
      'format': 'iframe',
      'height': 60,
      'width': 468,
      'params': {}
    }
  }, [])
  return (
    <>
      <Head>
        <title>Free online image converter</title>
        <meta
          name="description"
          content="Convert images to different formats instantly with our free online image converter. Easy to use, no downloads required – support for JPG, PNG, WebP, GIF, BMP, and more."
        />
        <meta name="trustpilot-one-time-domain-verification-id" content="ed91edf4-8621-4f41-bba7-341e043c3e39" />
        <link rel="canonical" href="https://nextconvert.in/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="google-adsense-account" content="ca-pub-5491129078114909" />
        <meta name="google-site-verification" content="K8Mntu3yG-MQFBwGcLGC9s8roRtf6bT1_ZXqsn_IH8U" />
      </Head>

      {/* Google AdSense */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5491129078114909"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-G50ERRPLJ3"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G50ERRPLJ3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Font Awesome */}
      <Script
        src="https://kit.fontawesome.com/ab8497c908.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />

      {/* Custom Script with data-noptimize attributes */}
      <Script id="mn-tz-loader" strategy="afterInteractive">
        {`
          (function () {
            var script = document.createElement("script");
            script.async = 1;
            script.setAttribute("data-noptimize", "1");
            script.setAttribute("data-cfasync", "false");
            script.setAttribute("data-wpfc-render", "false");
            script.src = "https://mn-tz.com/NDA4NTQ5.js?t=408549";
            document.head.appendChild(script);
          })();
        `}
      </Script>

      {/* Page Components */}
      <ImageUploader />
      <Stepthree />
      <Trustpilot />
      <Steps />
      <ChangeImageBlog />
      <Tools />
      <TransformImage />
      <Whyus />
      {/* <Blogs /> */}
      <Gradientbanner />
    </>
  )
}
