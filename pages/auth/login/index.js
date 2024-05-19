import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <div className="md:grid grid-cols-2">
            <div className=" relative bg-cover flex items-center justify-center py-24" style={{backgroundImage:"url(/dummy/login-bg.png)"}}>
                {/* <img alt="login-bg" src="/dummy/login-bg.png" className="max-h-[768px] w-full"/> */}
                <img className=" w-[60%]" alt="login-girl" src="/dummy/login-girl.png"/>
            </div>
            <div className="flex items-center justify-center md:py-0 py-5">
                <div className=" lg:w-[50%]">
                    <p className="uppercase text-[30px] font-bold text-center font-harmony-black">Login</p>
                    <p className=" text-base text-[#525252] text-center">How to i get started lorem ipsum dolor at?</p>
                    <form onSubmit={(e) => {
                        loginWithRedirect();
                        e.preventDefault()
                    }} autoComplete="off">
                        <div className="login-from grid gap-2 mt-6">
                            <div className="bg-[#F0EDFF] p-3 focus:outline-none rounded-[16px] w-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M16 21H14V19C14 17.3431 12.6569 16 11 16H5C3.34315 16 2 17.3431 2 19V21H0V19C0 16.2386 2.23858 14 5 14H11C13.7614 14 16 16.2386 16 19V21ZM8 12C4.68629 12 2 9.3137 2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 9.3137 11.3137 12 8 12ZM8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z" fill="#1C1C1C"/>
                                </svg>
                                <input required autoComplete="off" name="Username" placeholder="Username" className="ml-2 p-0 bg-transparent focus:outline-none w-full text-[#000] placeholder:text-[#000]"/>
                            </div>

                            <div className="bg-[#F0EDFF] p-3 focus:outline-none rounded-[16px] w-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                                <path d="M3 7V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3ZM16 9H2V19H16V9ZM8 14.7324C7.4022 14.3866 7 13.7403 7 13C7 11.8954 7.8954 11 9 11C10.1046 11 11 11.8954 11 13C11 13.7403 10.5978 14.3866 10 14.7324V17H8V14.7324ZM5 7H13V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7Z" fill="#1C1C1C"/>
                                </svg>
                                <input required autoComplete="off" name="Password" placeholder="Password" type="password" className="ml-2 p-0 bg-transparent focus:outline-none w-full text-[#000] placeholder:text-[#000]"/>
                            </div>
                            <button className=" shadow-xl uppercase rounded-full font-harmony-bold text-white p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden mt-3">
                                <div className="flex h-full w-full items-center justify-center  px-7 py-2 rounded-full">
                                    <p className="">Login Now</p>
                                </div>
                            </button>
                        </div>
                    </form>
                    <p className=" text-lg text-center mt-6"><span className=" font-harmony-black">Login</span> with Others</p>
                    <div  className="grid gap-2 mt-6">
                        <button className="rounded-full mr-2 font-harmony-bold text-[#000] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
                            <div className="flex h-full w-full items-center justify-center bg-white px-7 py-2 rounded-full">
                                <img src="/dummy/google.png" width={30} height={30} className="mr-1"/>
                                <p className="">Login with <span className=" font-harmony-black">google</span></p>
                            </div>
                        </button>
                        <button className="rounded-full mr-2 font-harmony-bold text-[#000] p-[1px] bg-gradient-to-r from-[#9768FC] to-[#347EED] overflow-hidden">
                            <div className="flex h-full w-full items-center justify-center bg-white px-7 py-2 rounded-full">
                                <img src="/dummy/facebook.png" width={30} height={30} className="mr-1"/>
                                <p className="">Login with <span className=" font-harmony-black">Facebook</span></p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;