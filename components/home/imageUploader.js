
import { useRouter } from 'next/router';
import { useState } from 'react';
import Uploader from './Uploader';

const ImageUploader = () => {
    const router = useRouter();
    const [imageURL, setImageURL] = useState('');
    const [convertedImageURL, setConvertedImageURL] = useState('');
    const [outputFormat, setOutputFormat] = useState('png');
    const [downloadLink, setDownloadLink] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 100 * 1024 * 1024) {
          alert('File size is too large!');
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImageURL(reader.result);
        };
      };

    const convertToFormat = (format) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const url = canvas.toDataURL(`image/${format}`);
          setConvertedImageURL(url);
          const link = document.createElement('a');
          link.download = `converted.${format}`;
          link.href = url;
          setDownloadLink(link);
        };
        img.src = imageURL;
    };

    const handleDownload = () => {
        if (downloadLink) {
          downloadLink.click();
        }
    };

    return(
        <section className=''>
            <div className=" text-[#322354] 2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="banner-upload md:grid lg:grid-cols-4 grid-cols-1 lg:gap-x-16 lg:pt-9">
                <div className=" col-span-1">
                    <img className="w-full lg:h-full md:h-[300px] h-[155px] object-contain" title="Free Online Image Converter jpg to png" alt="Free Online Image Converter jpg to png" src="/dummy/ads.png"/>
                </div>
                <div className="col-span-2">
                    <div className="banner-text mb-4">
                        <h1 className="text-center font-harmony-bold 2xl:text-5xl xl:text-4xl lg:text-4xl text-3xl">Free Online Image Converter</h1>
                        <h2 className=" text-center md:mt-6 mt-3 md:text-lg text-sm text-[#706f73]">Convert images online effortlessly! Choose from multiple formats, apply effects, and enhance your visuals instantly with our Online Image Converter. Try it now!</h2>
                    </div>
                    <img className="w-full" title="Convert image file with different formats" alt="Convert image file with different formats" src="/dummy/ads1.png"/>
                   <Uploader 
                   title="Free Online Image Converter"
                   content="Convert images online effortlessly! Choose from multiple formats, apply effects, and enhance your visuals instantly with our Online Image Converter. Try it now!"
                   />
                   <img className="w-full" alt="Convert image to PNG" title="Convert image to PNG" src="/dummy/ads1.png"/>
                </div>
                <div className="col-span-1">
                    <img className="w-full lg:h-full md:h-[300px] h-[155px] object-contain" alt="Free Online Image Converter png to jpg" title="Free Online Image Converter png to jpg" src="/dummy/ads.png"/>
                </div>
            </div>
        </div>
        </section>
    )
}
export default ImageUploader;
