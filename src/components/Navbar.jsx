import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import Cookies from "js-cookie";
import Logo from "./Logo";

export default function Navbar() {
    const navigate = useNavigate();

    const LogoutHandler = () => {
        Cookies.remove('authToken')
        navigate(ROUTES.SIGNIN);
        
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Logo />
            </div>
            <div className="flex-none gap-2">
               <button className = "btn text-white bg-success hover:text-black" onClick={LogoutHandler}  > Logout </button>
            </div>
        </div>
    );
}
