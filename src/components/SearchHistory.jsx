import { useState } from "react";
import { CONSTANT } from "../constants";
import { useMeQuery } from "../redux/API";

export default function SearchHistory() {
    const { data, isLoading } = useMeQuery();

    return (
        <div className="bg-primary text-white p-2 rounded-lg">
            <div className="flex items-center justify-between">
                <h4 className=""> {CONSTANT.CONVERSATIONS} </h4>
                <button className=" text-xl">+</button>
            </div>
            <ul>
                {data?.data?.searchHistory?.map((item, index) => (
                    <li
                        key={index}
                        className=" text-sm p-1 border-[1px] hover:bg-slate-100 my-1 rounded-lg "
                    >
                        {item?.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
