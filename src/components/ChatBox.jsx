import { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useChatMutation, useAddConversationMutation, useMeQuery } from "../redux/API";
import { RiRobot3Fill } from "react-icons/ri";

export default function ChatBox() {
    const [chatText, setChatText] = useState("");
    const [isFocused, setISFocused] = useState(false);
    const { data: user } = useMeQuery();
    const [chat, { isLoading : responseLoder }] = useChatMutation();
    const [addConversation] = useAddConversationMutation();
    const [conversationId, setConversationId] = useState(0);
    const [conversation, setConversation] = useState([]);
    
    const startConversation = async () => {
        try {
            const resp = await addConversation({ user_id: user?.id }).unwrap();
            setConversationId(resp?.id);
        } catch (err) {
            console.log(err);
        }
    };

    const sendQuery = async (id) => {
        const chatData = {
            conversation_id: id,
            message: chatText,
        };

        try {
            const resp = await chat(chatData).unwrap();
            setConversation(resp);
        } catch (err) {
            console.log(err);
        }
        setChatText("");
    };

    const handleKeyDown = (event)=>{
        if (event.key === 'Enter') {
            sendQuery(conversationId);
            setISFocused(false)
          }
          
    }

    useEffect(() => {
        
        startConversation();
       

       if(conversationId){
            sendQuery(conversationId);
       }
        
    }, []);

    return (
        <>
            <div className=" m-2 overflow-y-auto">
                {conversation?.map((data, index) => (
                    <div key={index} className="">
                        {index % 2 == 0 ? (
                            // robot message
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <RiRobot3Fill size={30} />
                                    </div>
                                </div>

                                <div className="chat-bubble">{data.content}</div>
                            </div>
                        ) : (
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble">{data.content} </div>
                            </div>
                        )}
                    </div>
                ))}
                {isFocused && <WritingAnimationOfUser />}
                {responseLoder &&  <WritingAnimationRobot />}
            </div>
            <div className=" m-2 relative">
                <input
                    className="input input-bordered w-full"
                    value={chatText}
                    // onKeyDown={handleKeyDown}
                    onFocus={() => setISFocused(true)}
                    onBlur={() => setISFocused(false)}
                    onChange={(e) => setChatText(e.target.value)}
                />
                <button
                    className=" absolute top-4  right-5 cursor-pointer"
                    onClick={() => sendQuery(conversationId)}
                >
                    <IoSendSharp size={20} />
                </button>
            </div>
        </>
    );
}

const WritingAnimationOfUser = () => {
    return (
        <>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>

                <div className="chat-bubble">
                    <span className="loading loading-dots loading-md"></span>
                </div>
            </div>
        </>
    );
};

const WritingAnimationRobot = () => {
    return (
        <>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <RiRobot3Fill size={30} />
                    </div>
                </div>

                <div className="chat-bubble">
                    <span className="loading loading-dots loading-md"></span>
                </div>
            </div>
        </>
    );
};
