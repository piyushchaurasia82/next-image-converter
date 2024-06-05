import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#fff] bg-shadow">
      <nav className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center text-base">
          <Link href="/">
            
              <img
                className="w-[155px]"
                src="/logo.png"
                alt="Logo"
              />
            
          </Link>
          <div className="hidden lg:block sm:ml-6">
          <ul className="flex space-x-10">
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
            <li>
              <Link href="/">
                <span className="text-[#322354]">
                    Blog
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
        </div>
        
        <div className="flex items-center">
          <button 
          // onClick={()=> {
          //   router.push('/auth/login')
          // }} 
          className="rounded-full mr-2 font-harmony-bold text-[#6166EB] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center bg-white md:px-7 px-3 py-2 rounded-full'>
                <p className='md:text-sm text-xs'>Log In</p>
            </div>
          </button>
          <button 
          // onClick={()=> {
          //   router.push('/auth/login')
          // }}
          className="rounded-full font-harmony-bold text-white p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center  md:px-7 px-3 py-2 rounded-full'>
                <p className='md:text-sm text-xs'>SIGNUP FOR FREE</p>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;