import Link from "next/link";

const Blogs = () => {
    return(
        <div className="mt-14 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid grid-cols-4 gap-x-16 mt-9">
                <div className="col-span-1">
                    <img className="w-full" alt="Google-adsense" src="/dummy/ads.png"/>
                </div>
                <div className="col-span-2 flex items-center">
                    <div className="w-full">
                    <div className="banner-text">
                        <p className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">Tips & Tricks for Image Converter</p>
                       
                    </div>
                    <div className="mt-20 flex flex-wrap items-center ">
                        <div className=" md:w-6/12 md:px-8">
                            <img className="w-full" alt="blogs" src="/dummy/blogs.png"/>
                        </div>
                        <div className=" md:w-6/12">
                            <ul className="text-[#6166EB] font-harmony-bold text-base leading-10 underline list-disc">
                                <Link href="/">
                                    <li>How to Easily Convert DCM to JPG Online</li>
                                </Link>
                                <Link href="/">
                                    <li>Convert PHP to JPG Easily</li>
                                </Link>
                                <Link href="/">
                                    <li>Easy Way to Convert PSB to JPG</li>
                                </Link>
                                <Link href="/">
                                    <li>Best ARW to JPG Converter-No Doubt</li>
                                </Link>
                                <Link href="/">
                                    <li>How to Convert JIF to JPG?</li>
                                </Link>
                                <Link href="/">
                                    <li>The Only Way to Convert DSC to JPG</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <img className="w-full" alt="Google-adsense" src="/dummy/ads.png"/>
                </div>
            </div>
        </div>
    )
}
export default Blogs;