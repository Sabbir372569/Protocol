
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";




const Mainlayout = () => {
    return (
        <div className="h-full lg:ml-72 xl:ml-80">
            <Header />
            <Outlet />
        </div>
    );
};

export default Mainlayout;