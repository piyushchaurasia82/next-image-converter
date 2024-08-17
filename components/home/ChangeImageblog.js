import Link from "next/link";

const ChangeImageBlog  = () => {
    return(
        <div className="mt-20 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="banner-text">
            <div className="grid md:grid-cols-2">
                <div>
                <p className="font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl text-[#322354]">Easily convert the image file format</p>
                <p className=" mt-6">
                    Different platforms require different image file formats, and you don’t need to juggle multiple conversion tools to get the job done. With NextConvert’s online image converter, you can easily transform a variety of image formats. Convert JPG, PNG, HEIC/HEIF, WebP, and SVG files into JPG, PNG, SVG, or PDF with just a few clicks.
                </p>
                <br/>
                    <p>Whether you’re looking to prepare images for web use, presentations, printing, or archiving, NextConvert provides a straightforward and efficient solution. Our user-friendly interface ensures that you can complete conversions with just a few clicks, saving you time and eliminating the need for multiple conversion tools. Additionally, NextConvert maintains high-quality output for each conversion, so your images retain their clarity and detail across different formats.</p>
                </div>
                <div>
                    <img title="Convert image file with different formats" alt="Convert image file with different formats" className="w-9/12 mx-auto" src="/changeimage.png"/>
                </div>
            </div>
            <div className="grid md:grid-cols-2 mt-20">
                <div>
                    <img title="Convert image to PNG" alt="Convert image to PNG" className="w-9/12 mx-auto" src="/changeimage2.png"/>
                </div>
                <div>
                <p className="font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl text-[#322354]">Transform any image into a creative asset</p>
                    <p className="mt-6">
                        By converting your images, you can meet the specific needs of your project. Opt for JPG to reduce file size, choose PNG or SVG for high-definition graphics, and secure your final file as a non-editable PDF. Perform all these tasks and more with NextConvert's image file converter, or use the <Link className="underline text-[#5a21ff]" href="/image-converter">PDF to PNG converter</Link> (opens in a new tab or window), accessible on any mobile, desktop, or tablet device.
                    </p>
                    <br/>
                    <p>Experience the convenience of handling all your image conversion needs in one place. No need to worry about format compatibility or quality loss—NextConvert has you covered. Give it a try and see how easy managing your image files can be!</p>
               </div>
            </div>
        </div>
    </div>
    )
    }
    export default ChangeImageBlog;