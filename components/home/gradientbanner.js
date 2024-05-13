const Gradientbanner = () => {
    return(
        <div className="mt-14 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8 md:mb-20 mb-10">
            <div className="md:w-10/12 md:p-0 p-4 mx-auto bg-gradient-to-r from-[#9768FC] to-[#347EED] rounded-[10px] md:min-h-[350px] flex items-center justify-center text-center text-white">
                <div>
                    <p className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">Your complete Image toolbox</p>
                    <p className=" text-center mt-6 md:text-sm text-xs md:w-7/12 mx-auto">
                    Online Converter is the best online image converter to convert picture for free. 
                    It allows you to convert many different types of photo forms to JPG, PNG, TIFF, or BMP image formats in high-quality.
                    </p>
                    <button className="rounded-full font-harmony-bold text-[#6166EB] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden md:mt-10 mt-5">
                        <div className='flex h-full w-full items-center justify-center bg-white px-7 py-2 rounded-full'>
                            <p className=''>Try Now</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Gradientbanner;