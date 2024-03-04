import React, { useState } from 'react';
import { LiaSearchSolid } from "react-icons/lia";

interface ChatSearchProps {
    placeholder: string;
    setSearchText?:React.Dispatch<React.SetStateAction<string>>
}

const ChatSearch = ({ placeholder, setSearchText}: ChatSearchProps) => {

    function debounce(func: (...args: any[]) => void, timeout = 800) {
        let timer: NodeJS.Timeout | undefined;
        return function (this: any, ...args: any[]) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(context, args); }, timeout);
        };
    };

    const handleSearch = (value: string) => {
        setSearchText && setSearchText(value);
    };
    const processChange = debounce(handleSearch);

    return (
        <fieldset className={`rounded-md mt-5 px-2 w-full space-y-1 `}>
            <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="button" title="search" className="p-1 outline-none">
                        <LiaSearchSolid />
                    </button>
                </span>
                <input
                    onChange={(e) => processChange ? processChange(e.target.value) : undefined}
                    type="search"
                    name="Search"
                    placeholder={placeholder}
                    className="w-full pl-10 text-sm rounded-md outline-none border-2 border-light-gray border-b-slate  focus:border-b-teal-green p-1"
                />
            </div>
        </fieldset>
    );
};

export default ChatSearch;