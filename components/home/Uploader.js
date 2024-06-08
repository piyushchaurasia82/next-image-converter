
import { useRouter } from 'next/router';
import { useState } from 'react';

const Uploader = () => {
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
        <div className="md:mt-10 mt-5 upload-box bg-shadow rounded-[10px] md:py-6 py-4 md:px-7 px-4">
        <div className="bg-[#fff] rounded-[10px] border-2 border-dashed border-[#5a21ff] md:py-10 py-5 px-7 text-center relative">
            {!imageURL &&
            <>
                <p className="md:text-lg text-base text-[#5a21ff] font-semibold">Convert images to JPG, PNG, BMP, TIFF online and free.</p>
                <label htmlFor="file-input" className="inline-block cursor-pointer relative rounded-md my-6 mx-auto font-harmony-bold text-white p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
                    <div className='flex h-full w-full items-center justify-center  px-7 py-2 rounded-md'>
                        <p className=' cursor-pointer'>Choose Files</p>
                        <img className='ml-4' src='/dummy/upload.png'/>
                    </div>
                    <input id='file-input' className='cursor-pointer absolute h-full w-full left-0 hidden top-0 opacity-0' type="file" onChange={handleImageChange} />
                </label>
                <p className="text-xs text-[#706f73]">Drop files here. 100 MB maximum file size or <span 
                // onClick={()=> {
                //     router.push('/auth/login')
                // }} 
                className="text-[#6166EB] cursor-pointer">Sign Up</span></p>
            </>
            }

            {imageURL &&
            <div className='grid grid-cols-2 gap-x-16'>
                <p title='cancel' className='absolute right-2 top-2 z-10 cursor-pointer text-white bg-[#f00] w-5 h-5 flex items-center justify-center font-harmony-black' 
                onClick={()=>{setImageURL("");setConvertedImageURL("");setDownloadLink(null)}}>
                    x
                </p>
                <div>
                    {imageURL && <img className='w-full' src={imageURL} alt="Original Image" />}
                        <div className='md:flex justify-between items-center mt-2'>
                            <select className='p-2 focus:outline-none border border-[#6166EB] text-[#6166EB] md:w-auto w-full md:mb-0 mb-2' value={outputFormat} onChange={(e) => {setOutputFormat(e.target.value);convertToFormat(e.target.value)}}>
                                <option value="bmp">BMP</option>
                                <option value="eps">EPS</option>
                                <option value="gif">GIF</option>
                                <option value="ico">ICO</option>
                                <option value="jpg">JPG</option>
                                <option value="odd">ODD</option>
                                <option value="png">PNG</option>
                                <option value="psd">PSD</option>
                                <option value="svg">SVG</option>
                                <option value="tga">TGA</option>
                                <option value="tiff">TIFF</option>
                                <option value="webp">WEBP</option>
                            </select>
                            <button className='bg-[#49277c] p-2 text-white' onClick={()=>convertToFormat(outputFormat)}>Convert to <span className='uppercase'>{outputFormat}</span></button>
                        </div>
                    </div>

                <div>
                    {convertedImageURL && (
                    <div>
                        <img src={convertedImageURL} alt="Converted Image" />
                        <div className='flex justify-center items-center mt-2'>
                            <button className='bg-[#49277c] p-2 text-white' onClick={handleDownload}>Download <span className='uppercase'>{outputFormat}</span></button>
                        </div>
                    </div>
                    )}
                </div>

            </div>
            }
        </div>
    </div>
    )
}
export default Uploader;