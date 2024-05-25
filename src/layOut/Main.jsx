import { Outlet } from "react-router-dom";
import Header from "../Componets/Header/Header";
import Footer from "../Componets/Footer/Footer";
import HeaderTop from "../Componets/Header/HeaderTop";


const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;