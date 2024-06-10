import { CONSTANT } from "../constants";

export default function Logo() {
    return (
        <div>
            <div className=" flex justify-center">
                <span className="bg-success text-white p-4 uppercase rounded-lg ">
                    {CONSTANT.CHAT_BOT}
                </span>
            </div>
        </div>
    );
}
