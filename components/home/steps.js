const Steps = () => {
    return(
        <div className="lg:mt-5 mt-5 text-[#322354] 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="banner-text">
                <p className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">How to Convert Images Easily <br/> with <span className="text-[#5a21ff]">Next</span>Convert ?</p>
                <p className=" text-center mt-6 md:text-sm text-xs md:w-7/12 mx-auto">
                    Online NextConvert is the best online image converter to convert picture for free. 
                    It allows you to convert many different types of photo forms to JPG, PNG, TIFF, or BMP image formats in high-quality.
                </p>
            </div>
            <div className="banner-upload grid lg:grid-cols-3 gap-x-16 md:gap-y-0 gap-y-10 lg:mt-20 mt-5">
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step1.svg"/>
                        <p className=" font-harmony-bold text-lg md:mt-6 mt-2">Upload Image Files</p>
                        <p className=" md:text-base text-sm text-[#5a5656] md:mt-5 mt-3">Select files from local disk or drag & drop them directly to the page.</p>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step2.svg"/>
                        <p className=" font-harmony-bold text-lg md:mt-6 mt-2">Choose Output Format</p>
                        <p className=" md:text-base text-sm text-[#5a5656] md:mt-5 mt-3">Choose JPG/PNG/TIFF/BMP image format as a result.</p>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step3.svg"/>
                        <p className=" font-harmony-bold text-lg md:mt-6 mt-2">Download Your Images</p>
                        <p className=" md:text-base text-sm text-[#5a5656] md:mt-5 mt-3">You can download the files or save it to your Dropbox right afterward.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps;