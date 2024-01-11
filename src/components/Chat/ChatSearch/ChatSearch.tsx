import React, { useState } from 'react';
import { LiaSearchSolid } from "react-icons/lia";

const ChatSearch = () => {
    return (
        <fieldset className={`rounded-md mt-5 px-2 w-full space-y-1 `}>
            <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="button" title="search" className="p-1 outline-none">
                    <LiaSearchSolid />
                </button>
                </span>
                <input
                type="search"
                name="Search"
                placeholder="Search or start a new chat"
                className="w-full pl-10 text-sm rounded-md outline-none border-2 border-light-gray border-b-slate  focus:border-b-teal-green p-1"
                />
            </div>
        </fieldset>
    );
};

export default ChatSearch;