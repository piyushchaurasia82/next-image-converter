const Steps = () => {
    return(
        <div className="mt-14">
            <div className="banner-text">
                <p className="text-center font-harmony-medium lg:text-3xl md:text-xl text-base">How to Convert Images Easily with Online Converter?</p>
                <p className=" text-center mt-6 md:text-sm text-xs md:w-7/12 mx-auto">
                    Online Converter is the best online image converter to convert picture for free. 
                    It allows you to convert many different types of photo forms to JPG, PNG, TIFF, or BMP image formats in high-quality.
                </p>
            </div>
            <div className="banner-upload md:grid grid-cols-3 gap-x-16 mt-20">
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step1.svg"/>
                        <p className=" font-harmony-bold text-lg mt-6">Upload Image Files</p>
                        <p className=" text-sm text-[#2E2E2E] mt-5">Select files from local disk or drag & drop them directly to the page.</p>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step2.svg"/>
                        <p className=" font-harmony-bold text-lg mt-6">Choose Output Format</p>
                        <p className=" text-sm text-[#2E2E2E] mt-5">Choose JPG/PNG/TIFF/BMP image format as a result.</p>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-7/12 mx-auto text-center">
                        <img className="w-6/12 mx-auto" alt="Google-adsense" src="/dummy/step3.svg"/>
                        <p className=" font-harmony-bold text-lg mt-6">Download Your Images</p>
                        <p className=" text-sm text-[#2E2E2E] mt-5">You can download the files or save it to your Dropbox right afterward.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps;