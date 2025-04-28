import Link from "next/link";
import { useEffect, useState } from "react";

const Tools = () => {
    const [newstate,setnewstate] = useState("")
    useEffect(()=>{
        console.log("dsfsdfsdfsdfsdf")
    },[])
    return (
        <div className="mt-20 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="banner-text">
                <div className="grid md:grid-cols-1">
                    <div>
                        <p className="font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl text-[#322354] text-center">Online Converter</p>
                        <p className="text-center md:mt-6 mt-3 md:text-lg text-sm text-[#706f73]">
                            convert media files online from one format to another. Simply select your target format below:
                        </p></div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 mt-20 gap-y-5 gap-x-5">
                <Link href="/convert-to-bmp" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to BMP</p>
                    <p>Effortlessly convert your images to the BMP format using our free online image converter.</p>
                </Link>
                <Link href="/convert-to-eps" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to EPS</p>
                    <p>Generate EPS files by converting your images, with optional digital filters available to enhance image quality.</p>
                </Link>
                <Link href="/convert-to-exr" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to HDR/EXR</p>
                    <p>Utilize our HDR (High dynamic-range) image converter to convert images using HDRI, with the option to apply effects for image manipulation.</p>
                </Link>
                <Link href="/convert-to-gif" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to GIF</p>
                    <p>Convert images to the GIF format or even turn videos into animated GIFs with our versatile online converter.</p>
                </Link>
                <Link href="/convert-to-ico" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to ICO</p>
                    <p>Switch your images to the ICO format, and you can even create a favicon.ico using our converter.</p>
                </Link>
                <Link href="/convert-to-jpg" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to JPG</p>
                    <p>Convert files from over 120 formats into high-quality JPG images, with the added option to apply digital effects.</p>
                </Link>
                <Link href="/convert-to-png" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to PNG</p>
                    <p>Transform images from various formats into PNG files, with the ability to add digital effects for enhanced visuals.</p>
                </Link>
                <Link href="/convert-to-svg" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to SVG</p>
                    <p>Convert images into SVG format effortlessly, with additional effects available for high-quality results.</p>
                </Link>
                <Link href="/convert-to-tga" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to TGA</p>
                    <p>Our online converter supports converting all kinds of images to the TGA (Targa) format, complete with optional effect settings and digital filters.</p>
                </Link>
                <Link href="/convert-to-tiff" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to TIFF</p>
                    <p>Easily convert images to TIFF format, with the option to further apply digital filters to customize their appearance.</p>
                </Link>
                <Link href="/convert-to-wbmp" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to WBMP</p>
                    <p>Convert images to the WBMP format, with the flexibility to apply digital effects as needed for image alteration.</p>
                </Link>
                <Link href="/convert-to-webp" className="p-10 border-l-4 border-[#5a21ff] rounded-3xl border">
                    <p className=" text-lg font-harmony-bold">Convert to WebP</p>
                    <p>Convert images to the WebP standard from Google using our free online converter, with instant download availability for your convenience.</p>
                </Link>
            </div>
        </div>
    )
}
export default Tools;