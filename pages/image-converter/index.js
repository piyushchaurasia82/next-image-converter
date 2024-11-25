import Head from "next/head";
import Uploader from "../../components/home/Uploader";
import Whyus from "../../components/home/whyus";
import Tools from "../../components/home/Tools";
import ChangeImageBlog from "../../components/home/ChangeImageblog";
import Stepthree from "../../components/home/stepthree";
import Trustpilot from "../../components/home/Trustpilot";

const ImageConvert = () => {
    return (
        <>
        <Head>
            <title>Image Converter: Convert Image to Any Format for Free</title>
            <meta name="description" content="Image Converter: Convert Image to Any Format for Free standard from Google using our free online converter, with instant download availability for your convenience." />
            <link rel="canonical" href="https://nextconvert.in/convert-to-webp" />
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
        <section className="pb-10">
        <div className=" text-[#322354] 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
                <div className="banner-upload md:grid lg:grid-cols-4 grid-cols-1 lg:gap-x-16 lg:pt-9">
                    <div className=" col-span-1">
                        <img className="w-full lg:h-full md:h-[300px] h-[155px] object-contain" alt="Google-adsense" src="/dummy/ads.png" />
                    </div>
                    <div className="col-span-2">
                        <div className="banner-text mb-4">
                            <h1 className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">Free Image Converter</h1>
                            <h2 className=" text-center md:mt-6 mt-3 md:text-lg text-sm text-[#706f73]">Convert your images files into JPG, PNG, SVG or PDF like magic. Use Nextconvert free online image converter to turn your photos into a format suited to your platform or project, without worrying about losing image quality.</h2>
                        </div>
                        <img className="w-full" alt="Google-adsense" src="/dummy/ads1.png" />
                        <Uploader />
                    </div>
                    <div className="col-span-1">
                        <img className="w-full lg:h-full md:h-[300px] h-[155px] object-contain" alt="Google-adsense" src="/dummy/ads.png" />
                    </div>
                </div>
            </div>
        </div>
        <Stepthree />
        <Trustpilot/>
        <ChangeImageBlog/>
        <Tools/>
        <Whyus/>
        </section>
        </>
    )
}
export default ImageConvert;
