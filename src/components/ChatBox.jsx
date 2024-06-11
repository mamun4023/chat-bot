import { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useChatMutation, useAddConversationMutation, useMeQuery } from "../redux/API";
import { RiRobot3Fill } from "react-icons/ri";

function isEven(num) {
    if (num % 2 == 0) return true;
    return false;
}

export default function ChatBox() {
    const [chatText, setChatText] = useState("Hi");
    const [isFocused, setISFocused] = useState(false);
    const { data: user } = useMeQuery();
    const [chat, { isLoading: responseLoder }] = useChatMutation();
    const [addConversation] = useAddConversationMutation();
    const [conversationId, setConversationId] = useState(0);
    const [conversation, setConversation] = useState([]);

    const startConversation = async () => {
        try {
            const resp = await addConversation({ user_id: user?.id }).unwrap();
            setConversationId(resp?.id);
            await sendQuery(resp?.id);
        } catch (err) {
            console.log(err);
        }
    };

    const sendQuery = async (id) => {
        const chatData = {
            conversation_id: id,
            message: chatText,
        };
        // setConversation((prev)=>[...prev, {id, content : chatText}])
        console.log("conversation", conversation);
        setChatText("");
        try {
            const resp = await chat(chatData).unwrap();
            setConversation(resp);
        } catch (err) {
            console.log(err);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendQuery(conversationId);
            setISFocused(false);
        }
    };

    useEffect(() => {
        startConversation();
    }, []);

    return (
        <>
            <div className=" m-2 overflow-y-auto">
                {conversation?.map((data, index) => (
                    <div key={index} className="">
                        {data?.user_id ? (
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
                        ) : (
                            // robot message
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <RiRobot3Fill size={30} />
                                    </div>
                                </div>

                                <div className="chat-bubble">{data.content}</div>
                            </div>
                        )}
                    </div>
                ))}
                {isFocused && <WritingAnimationOfUser />}
                {responseLoder && <WritingAnimationRobot />}
            </div>
            <div className=" m-2 relative">
                <input
                    className="input input-bordered w-full"
                    value={chatText}
                    onKeyDown={handleKeyDown}
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
