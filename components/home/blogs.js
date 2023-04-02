import Link from "next/link";

const Blogs = () => {
    return(
        <div className="mt-14">
            <div className="md:grid grid-cols-4 gap-x-16 mt-9">
                <div className="col-span-1">
                    <img className="w-full" alt="Google-adsense" src="/dummy/ads.png"/>
                </div>
                <div className="col-span-2 flex items-center">
                    <div className="w-full">
                    <div className="banner-text">
                        <p className="text-center font-harmony-medium lg:text-3xl md:text-xl text-base">Tips & Tricks for Image Converter</p>
                       
                    </div>
                    <div className="mt-20 flex flex-wrap items-center ">
                        <div className=" md:w-6/12 md:px-8">
                            <img className="w-full" alt="blogs" src="/dummy/blogs.png"/>
                        </div>
                        <div className=" md:w-6/12">
                            <ul className="text-[#6166EB] font-harmony-bold text-base leading-10 underline list-disc">
                                <a href="/">
                                    <li>How to Easily Convert DCM to JPG Online</li>
                                </a>
                                <a href="/">
                                    <li>Convert PHP to JPG Easily</li>
                                </a>
                                <a href="/">
                                    <li>Easy Way to Convert PSB to JPG</li>
                                </a>
                                <a href="/">
                                    <li>Best ARW to JPG Converter-No Doubt</li>
                                </a>
                                <a href="/">
                                    <li>How to Convert JIF to JPG?</li>
                                </a>
                                <a href="/">
                                    <li>The Only Way to Convert DSC to JPG</li>
                                </a>
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