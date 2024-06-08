import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import Cookies from "js-cookie";

export default function Navbar() {
    const navigate = useNavigate();

    const LogoutHandler = () => {
        Cookies.remove('authToken')
        navigate(ROUTES.SIGNIN);
        
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={ROUTES.HOME} className="btn btn-ghost text-xl">
                    {CONSTANT.CHAT_BOT}
                </Link>
            </div>
            <div className="flex-none gap-2">
               <button onClick={LogoutHandler} className=" btn" > Logout </button>
            </div>
        </div>
    );
}
