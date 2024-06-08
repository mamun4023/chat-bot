import { useState } from "react";
import { CONSTANT } from "../constants";
import { useMeQuery } from "../redux/API";

export default function SearchHistory() {
    const { data, isLoading } = useMeQuery();

    return (
        <div className="mt-4">
            <h1 className=" text-xl font-bold"> {CONSTANT.SEARCH_HISTORY} </h1>
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
