import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
    return(
        <main className="w-full">
            <Header/>
                <div className="">
                    {children}
                </div>
            <Footer/>
        </main>
    )
}
export default Layout;