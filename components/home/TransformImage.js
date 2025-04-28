const TransformImage  = () => {
return(
    <div className="mt-20 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="banner-text">
        <div className="grid md:grid-cols-2">
            <div>
            <p className="font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl text-[#322354]">Transform Your Images for Free with NextConvert: The Ultimate Free Image Converter</p>
            <p className=" mt-6">
            Are you tired of scouring the internet for a reliable and free image converter? Look no further! NextConvert is your one-stop solution for all your image conversion needs. Our user-friendly platform offers a seamless experience, allowing you to convert your images effortlessly and efficiently.
            </p>
            <br/>
            <p>With NextConvert, you can convert your images to various formats such as JPG, PNG, GIF, BMP, and more, all at absolutely no cost! Whether you need to resize, rotate, or compress your images, our advanced tools have got you covered. Say goodbye to expensive software and cumbersome online converters – NextConvert is here to revolutionize the way you handle your images.</p>
            </div>
            <div>
                <img alt="transfromimage" className="w-9/12 mx-auto" src="/transfromimage.jpg"/>
            </div>
        </div>
        <div className="grid md:grid-cols-2 mt-20">
            <div>
                <img alt="converter" className="w-9/12 mx-auto" src="/converter.png"/>
            </div>
            <div>
            <p className="font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl text-[#322354]">Convert Images Quickly and Easily with NextConvert</p>
            <ul className="mt-6 list-disc list-outside p-0">
                <li>Multiple Format Conversion: Convert your images simultaneously into multiple formats by simply selecting the desired options. Whether it's icons, BMP, HEIC, GIF, or any other supported format, we've got you covered.</li>
                <li>Extensive Format Support: We support a wide range of image formats including BMP, HEIC, GIF, HDR, ICO, TIFF, and more. Whether you're working with standard formats or specialized ones like Photoshop PSD, our converter has you covered.</li>
                <li>Customizable Settings: Easily adjust image dimensions or specify rotation angles with our intuitive settings. Fine-tune your images to meet your exact specifications without any hassle.</li>
                <li>No Size Restrictions: Forget about file size limitations. Our service allows you to convert images of any size, with convenient resizing and parameterization options available to ensure optimal results.</li>
                <li>Instant Conversion: Experience lightning-fast conversion with our online tool. Get high-quality images in a matter of seconds, saving you time and effort.</li>
            
            </ul>
           </div>
        </div>
    </div>
</div>
)
}
export default TransformImage;