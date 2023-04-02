const Footer = () => {
    return(
        <footer className="mt-14 bg-black text-white py-16">
            <div className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:grid grid-cols-3 gap-x-16">
                    <div className="flex items-center justify-center">
                        <div>
                            <img
                                className="h-10"
                                src="/logo.png"
                                alt="Logo"
                            />
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className=" grid grid-cols-3">
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4">Popular Tools</p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li>Online Video Editor</li>
                                    <li>Auto Color Correction</li>
                                    <li>Noise Reducer</li>
                                    <li>Face Cartoonizer</li>
                                    <li>8X Image Upscaler</li>
                                    <li>Image sharpener</li>
                                </ul>
                            </div>
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4">Quick Link</p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li>Online Video Editor</li>
                                    <li>Auto Color Correction</li>
                                    <li>Noise Reducer</li>
                                </ul>
                            </div>
                            <div>
                                <p className=" font-harmony-bold text-lg mb-4">Popular Tools</p>
                                <ul className=" text-sm leading-10 p-0 m-0"> 
                                    <li>Online Video Editor</li>
                                    <li>Auto Color Correction</li>
                                    <li>Noise Reducer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;