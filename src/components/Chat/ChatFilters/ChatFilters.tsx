import React, { useState } from 'react';
import { RiMenu5Fill } from "react-icons/ri";


interface FilterMenu {
    id: string
    name: string
    value: string
    icon: React.FC<{}>;
}

interface ChatFiltersProps {
    filterMenu: FilterMenu[]
    title: string
    setFilterText:React.Dispatch<React.SetStateAction<string>>
}

const ChatFilters = ({ filterMenu, title,setFilterText }: ChatFiltersProps) => {
    const [showFilterOptions, setShowFilterOptions] = useState(false)
    return (
        <div className='relative'>
            <RiMenu5Fill className='cursor-pointer' onClick={() => setShowFilterOptions(!showFilterOptions)} />
            <div className={` min-w-max w-40 bg-soft-gray p-2 rounded-lg absolute  z-10  ${showFilterOptions ? "top-5 duration-500 ease-in-out" : "-top-96"}`} >
                <p className='text-slate mb-2 font-medium'>{title}</p>
                <div className='space-y-3'>
                    {
                        filterMenu.map(item => <div onClick={()=>setFilterText(item.value)} key={item.id} className='flex items-center gap-2 text-sm font-medium text-gray cursor-pointer'>
                            <p className=''><item.icon /></p>
                            <p>{item.name}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChatFilters;