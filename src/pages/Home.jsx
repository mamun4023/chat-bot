import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";
import SearchHistory from "../components/SearchHistory";
// import BookSearch from "../components/BookSearch";

export default function Home() {
    return (
        <section className="relative" style={{border : "1px solid red", height : '100vh'}}  >
            <Navbar />
            {/* header */}
            <div className=" grid grid-cols-4 m-2"  >
                <div className=" col-span-1">
                    <SearchHistory />
                </div>
                <div className="col-span-3"  >
                    <div className=" flex items-center text-white bg-primary ml-2 p-2 rounded-lg" >
                        <div className="avatar">
                            <div className="w-7 rounded-full ">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <span className=" pl-2"> Chatbot </span>
                    </div>

                   
                </div>
            </div>

            <div className="grid grid-cols-4  absolute bottom-0 w-full "   >
                <div className=" col-span-1"></div>
                <div className="col-span-3">
                    <ChatBox />
                </div>
            </div>
        </section>
    );
}
