import Link from "next/link";

const Footer = () => {
    return(
        <footer className=" bg-black text-white md:pt-16 pt-3">
            <div className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:grid grid-cols-3 gap-x-16">
                    <div className="flex items-center justify-center">
                        <div>
                            <img
                                className="h-10"
                                src="/logowhite.png"
                                alt="Logo"
                            />
                            {/* <i className="fa-brands fa-facebook"></i> */}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className=" grid grid-cols-3">
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4">Image Converter</p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li><Link href="/jpg-to-png">JPG to PNG</Link></li>
                                    <li><Link href="/png-to-jpg">PNG to JPG</Link></li>
                                    <li><Link href="/png-to-webp">PNG to WEBP</Link></li>
                                    <li><Link href="/jpg-to-webp">JPG to WEBP</Link></li>
                                    <li><Link href="/jpeg-to-webp">JPEG to WEBP</Link></li>
                                    <li><Link href="/jpeg-to-jpg">JPEG to JPG</Link></li>
                                    <li><Link href="/jpeg-to-png">JPEG to PNG</Link></li>
                                    <li><Link href="/png-to-svg">PNG to SVG</Link></li>
                                    <li><Link href="/svg-to-png">SVG to PNG</Link></li> 
                                </ul>
                            </div>
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4 flex items-center">Quick Link <span className="ml-2 text-[10px] bg-[#5b22ff] px-2 rounded-full">COMING SOON</span></p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li>JPG to PDF</li>
                                    <li>PDF to JPG</li>
                                    <li>HEIC to JPG</li>
                                    <li>Image to PDF</li>
                                    <li>Free Resume build</li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li>Image Converter</li>
                                </ul>
                            </div>
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4">Company</p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/privacy">Terms and Privacy</Link></li>
                                    <li><a href="mailto:piyushchaurasia82@gmail.com">Contact Sales</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8 md:py-10">
                <p className=" text-center md:text-base text-xs">© 2025 ❤️ NextConvert, Inc. All Rights Reserved.</p>
            </div>
            
        </footer>
    )
}
export default Footer;