import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [ShowDropDown,setShowDropDown] = useState(false)
  const dropDownRef = useRef(null);
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
  //       setShowDropDown(false);
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dropDownRef]);
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="trustpilot-one-time-domain-verification-id" content="ed91edf4-8621-4f41-bba7-341e043c3e39" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta httpEquiv="content-language" content="en" />
    <meta name="google-adsense-account" content="ca-pub-5491129078114909" />
    <meta name="google-site-verification" content="K8Mntu3yG-MQFBwGcLGC9s8roRtf6bT1_ZXqsn_IH8U" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5491129078114909"
    crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-G50ERRPLJ3"></script>
    <script
    dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-G50ERRPLJ3', {
        page_path: window.location.pathname,
        });
    `,
    }}
    />
    </Head>
    <header className="bg-[#fff] bg-shadow">
      <nav className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center text-base">
          <Link href="/">
            
              <img
                className="w-[155px]"
                src="/logo.png"
                alt="NextConvert logo"
                title="NextConvert logo"
              />
            
          </Link>
          <div className="hidden lg:block sm:ml-6">
          <ul className="flex space-x-10">
            <li className=' relative'>
              <button onClick={()=>setShowDropDown(!ShowDropDown)} role="button" aria-haspopup="true" data-toggle="dropdown">
                <span className="text-[#322354]">
                  Image converter
                </span>
                <i class="fa fa-chevron-down menu-open hidden-mobile ml-2"></i>
              </button>
              {ShowDropDown &&
                <div 
                // ref={dropDownRef}
                onMouseLeave={()=> {
                  setShowDropDown(false)
                }} 
                className=' absolute bg-white p-5 top-[100%] min-w-40 w-max bg-shadow rounded-b-lg'>
                <div className=' grid grid-cols-3 w-full text-sm'>
                  <ul>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-bmp">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to BMP
                          </span>
                        </Link>
                      </li>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-eps">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to EPS
                          </span>
                        </Link>
                      </li>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-exr">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to HDR/EXR
                          </span>
                        </Link>
                      </li>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-gif">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to GIF
                          </span>
                        </Link>
                      </li>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-ico">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to ICO
                          </span>
                        </Link>
                      </li>
                      <li className='p-2 pr-3 hover:bg-slate-300'>
                        <Link href="/convert-to-jpg">
                          <span className="text-[#322354] whitespace-nowrap">
                              Convert to JPG
                          </span>
                        </Link>
                      </li>
                  </ul>
                  <ul>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-png">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to PNG
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-svg">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to SVG
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-tga">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to TGA
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-tiff">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to TIFF
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-wbmp">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to WBMP
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/convert-to-webp">
                        <span className="text-[#322354] whitespace-nowrap">
                            Convert to WebP
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/jpg-to-png">
                        <span className="text-[#322354] whitespace-nowrap">
                            JPG to PNG
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/png-to-jpg">
                        <span className="text-[#322354] whitespace-nowrap">
                        PNG to JPG
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/png-to-webp">
                        <span className="text-[#322354] whitespace-nowrap">
                        PNG to WEBP
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/jpg-to-webp">
                        <span className="text-[#322354] whitespace-nowrap">
                        JPG to WEBP
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/jpeg-to-webp">
                        <span className="text-[#322354] whitespace-nowrap">
                        JPEG to WEBP
                        </span>
                      </Link>
                    </li>
                    <li className='p-2 pr-3 hover:bg-slate-300'>
                      <Link href="/jpeg-to-jpg">
                        <span className="text-[#322354] whitespace-nowrap">
                        JPEG to JPG
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                </div>
              }
            </li>
            <li>
              <Link href="/image-converter">
                <span className="text-[#322354]">
                  Free Image converter
                </span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span className="text-[#322354]">
                    Privacy
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-[#322354]">
                    About us
                </span>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <span className="text-[#322354]">
                    Converter
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-[#322354]">
                    Tools
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-[#322354]">
                    Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-[#322354]">
                    Help
                </span>
              </Link>
            </li>
            */}
             <li>
              <Link href="/blog">
                <span className="text-[#322354]">
                    Blog
                </span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
        {/* <div className="flex items-center">
          <button 
          onClick={()=> {
            router.push('/auth/login')
          }} 
          className="rounded-full mr-2 font-harmony-bold text-[#6166EB] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center bg-white md:px-7 px-3 py-2 rounded-full'>
                <p className='md:text-sm text-xs'>Log In</p>
            </div>
          </button>
          <button 
          onClick={()=> {
            router.push('/auth/login')
          }}
          className="rounded-full font-harmony-bold text-white p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center  md:px-7 px-3 py-2 rounded-full'>
                <p className='md:text-sm text-xs'>SIGNUP FOR FREE</p>
            </div>
          </button>
        </div> */}
      </nav>
    </header>
    </>
  );
};

export default Header;