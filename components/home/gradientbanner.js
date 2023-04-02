const Gradientbanner = () => {
    return(
        <div className="mt-14">
            <div className="md:w-10/12 mx-auto bg-gradient-to-r from-[#9768FC] to-[#347EED] rounded-[10px] md:min-h-[350px] flex items-center justify-center text-center text-white">
                <div>
                    <p className="text-center font-harmony-medium lg:text-3xl md:text-xl text-base">Your complete Image toolbox</p>
                    <p className=" text-center mt-6 md:text-sm text-xs md:w-7/12 mx-auto">
                    Online Converter is the best online image converter to convert picture for free. 
                    It allows you to convert many different types of photo forms to JPG, PNG, TIFF, or BMP image formats in high-quality.
                    </p>
                    <button className="rounded-full mr-2 font-harmony-bold text-[#6166EB] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden mt-10">
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