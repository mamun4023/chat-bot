import { useState } from "react";
import { CONSTANT } from "../constants";
import { useGetConversationsQuery, useRemoveConversationMutation } from "../redux/API";
import { MdDelete } from "react-icons/md";

export default function Conversations() {
    const { data, isLoading } = useGetConversationsQuery();
    const [id, setId] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <div className="p-2.5 rounded-lg  bg-primary text-white flex items-center justify-between">
                <h4 className=""> {CONSTANT.CONVERSATIONS} </h4>
            </div>
            <div className=" max-h-[700px] bg-white overflow-y-auto overflow-hidden">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className=" flex justify-between items-center text-sm p-1 border-[1px] hover:bg-slate-100 my-1 rounded-lg "
                    >
                        <div> {item?.id} </div>
                        <button
                            onClick={() => {
                                openModal();
                                setId(item?.id);
                            }}
                        >
                            <MdDelete className="text-error" />
                        </button>
                    </div>
                ))}
                {isLoading && (
                    <div className=" flex justify-center items-center h-80">
                        <span className="loading loading-spinner text-primary"></span>
                    </div>
                )}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} id={id} />
        </div>
    );
}

const Modal = ({ isOpen, onClose, id }) => {
    const { refetch } = useGetConversationsQuery();
    const [removeConversation, { isLoading }] = useRemoveConversationMutation();
    const removeHandler = async (id) => {
        try {
            await removeConversation(id).unwrap();
            refetch();
        } catch (err) {
            console.log(err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-80  h-full w-full">
            <div className="relative mt-20 top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Are you Sure ?</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">Your Content will never back</p>
                    </div>
                    <div className="flex justify-center  gap-2">
                        <button
                            onClick={() => {
                                removeHandler(id);
                                onClose();
                            }}
                            className=" btn btn-error text-white"
                        >
                            {" "}
                            Remove
                        </button>
                        <button className="btn " onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
