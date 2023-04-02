import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
    return(
        <main className="w-full">
            <Header/>
                <div className="2xl:w-10/12 lg:w-full mx-auto px-4 sm:px-6 lg:px-8">
                {children}
                </div>
            <Footer/>
        </main>
    )
}
export default Layout;