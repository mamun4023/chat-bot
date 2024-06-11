import { Link } from "react-router-dom";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";

export default function NotFound() {
    return (
        <div className=" h-screen flex justify-center items-center">
            <div>
                <h1 className="text-5xl font-bold ">Not Found</h1>
                <div className=" flex justify-center m-4">
                    <Link className=" btn font-[700] text-xl btn-success" to={ROUTES.SIGNIN}>
                        {CONSTANT.SIGNIN}
                    </Link>
                </div>
            </div>
        </div>
    );
}
