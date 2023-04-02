import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center text-base">
          <Link href="/">
            
              <img
                className="h-10"
                src="/logo.png"
                alt="Logo"
              />
            
          </Link>
          <div className="hidden sm:block sm:ml-6">
          <ul className="flex space-x-10">
            <li>
              <Link href="/">
                <span className="text-black hover:text-gray-900">
                    Converter
                </span>
              </Link>
            </li>
            <li>
              <Link href="/tools">
                <span className="text-black hover:text-gray-900">
                    Tools
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="text-black hover:text-gray-900">
                    Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <span className="text-black hover:text-gray-900">
                    Help
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="text-black hover:text-gray-900">
                    Blog
                </span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
        <div className="flex items-center">
          <button className="rounded-full mr-2 font-harmony-bold text-[#6166EB] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center bg-white px-7 py-2 rounded-full'>
                <p className=''>Log In</p>
            </div>
          </button>
          <button className="rounded-full font-harmony-bold text-white p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
            <div className='flex h-full w-full items-center justify-center  px-7 py-2 rounded-full'>
                <p className=''>SIGNUP FOR FREE</p>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;