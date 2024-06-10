import { useState } from "react";
import { CONSTANT } from "../constants";
import { useMeQuery } from "../redux/API";
import { useGetConversationsQuery, useRemoveConversationMutation } from "../redux/API";
import { MdDelete } from "react-icons/md";
import Loader from '../components/Loader'

export default function Conversations() {
    const { data, refetch, isLoading } = useGetConversationsQuery()
    const [removeConversation, {isLoading : removeLoader}] = useRemoveConversationMutation();
    
    const removeHandler = async(id)=>{
        try{
            await removeConversation(id).unwrap()
            refetch()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="p-2.5 rounded-lg  bg-primary text-white flex items-center justify-between">
                <h4 className=""> {CONSTANT.CONVERSATIONS} </h4>
                {/* <button className=" text-xl">+</button> */}
            </div>
            <div  className=" max-h-[700px] overflow-y-auto overflow-hidden">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className=" flex justify-between items-center text-sm p-1 border-[1px] hover:bg-slate-100 my-1 rounded-lg "
                        onClick={()=> removeHandler(item.id)}
                    >
                       <div> {item?.id} </div>  
                       <button > <MdDelete /> </button>  
                    </div>
                ))}
                {isLoading || removeLoader && (

                
                <div className=" flex justify-center items-center h-80"> 
                    <span className="loading loading-spinner text-primary"></span>
                </div>
                )}
            </div>
        </div>
    );
}
