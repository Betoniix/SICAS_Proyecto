import Header from "../components/header";
import NavBar from "../components/navBar";



const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex h-[85vh] justify-evenly items-center">
                <div className="ml-10 mr-10">
                    <NavBar /> {/* Ajusta el margen según tus necesidades */}
                </div>
                <div className="flex flex-col items-center w-full">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
