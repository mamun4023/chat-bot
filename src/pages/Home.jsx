import { useState } from "react";
import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";
import SearchHistory from "../components/SearchHistory";
import { useMeQuery } from "../redux/API";
import { RiMenu2Fill } from "react-icons/ri";

export default function Home() {
    const { data } = useMeQuery();
    const [open, setOpen] = useState(false)
    return (
        <section className="relative h-screen">
            <Navbar />
            <div className="absolute   left-2 flex z-10 w-full md:hidden"> 
                {open && <SearchHistory />} 
                <button onClick={()=> setOpen(prev=> !prev)} className=" btn ">
                    <RiMenu2Fill />
                </button>
            </div>
            {/* header */}
            <div className=" grid grid-cols-4 m-2  invisible md:visible">
                <div className="col-span-1 ">
                    <SearchHistory />
                </div>
                <div className="col-span-3">
                    <div className=" flex items-center text-white bg-primary ml-2 p-2 rounded-lg">
                        <div className="avatar">
                            <div className="w-7 rounded-full ">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <span className=" pl-2"> {data?.name} </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4  absolute bottom-0 w-full ">
                <div className=" col-span-1"></div>
                <div className="col-span-3">
                    <ChatBox />
                </div>
            </div>
        </section>
    );
}
