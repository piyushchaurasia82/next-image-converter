import Head from "next/head";
import Uploader from "../../components/home/Uploader";
import Whyus from "../../components/home/whyus";
import Tools from "../../components/home/Tools";
import ChangeImageBlog from "../../components/home/ChangeImageblog";
import Stepthree from "../../components/home/stepthree";
import Trustpilot from "../../components/home/Trustpilot";

const ConvertWbmp = () => {
    return (
        <>
        <Head>
            <title>Convert image to WBMP (mobile format)</title>
            <meta name="description" content="Convert images to the WBMP format, with the flexibility to apply digital effects as needed for image alteration." />
            <link rel="canonical" href="https://nextconvert.in/convert-to-wbmp" />
        </Head>
        <section className="pb-10">
        <div className=" text-[#322354] 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
                <div className="banner-upload md:grid lg:grid-cols-4 grid-cols-1 lg:gap-x-16 lg:pt-9">
                    <div className=" col-span-1">
                        <div  className="w-full lg:h-full md:h-[300px] h-[155px] object-contain"></div>
                    </div>
                    <div className="col-span-2">
                        <div className="banner-text mb-4">
                            <h1 className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">Convert image to WBMP (mobile format)</h1>
                            <h2 className=" text-center md:mt-6 mt-3 md:text-lg text-sm text-[#706f73]">Convert images to the WBMP format, with the flexibility to apply digital effects as needed for image alteration.</h2>
                        </div>
                        <img className="w-full" alt="Google-adsense" src="/dummy/ads1.png" />
                        <Uploader />
                    </div>
                    <div className="col-span-1">
                        <div  className="w-full lg:h-full md:h-[300px] h-[155px] object-contain"></div>
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
export default ConvertWbmp;
