import React, { useEffect, useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { GiMusicalScore } from "react-icons/gi";
import { FaRegFile, FaUsers } from "react-icons/fa";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";
import { MdInsertLink } from 'react-icons/md';
import { RiGroupLine } from "react-icons/ri";
import Overview from '../Overview/Overview';
import Members from '../Members/Members';
import Media from '../Media/Media';
import Files from '../Files/Files';
import Links from '../Links/Links';
import Groups from '../Groups/Groups';

interface ChatChannelDetailsProps {
    openChatChannelDetailsPage:boolean
    setOpenChatChannelDetailsPage: React.Dispatch<React.SetStateAction<boolean>>;
    overviewDetails:any
    img: string;
    name: string;
}

const ChatChannelDetails = ({openChatChannelDetailsPage,setOpenChatChannelDetailsPage,overviewDetails,img,name}:ChatChannelDetailsProps) => {
    const [showOverview, setShowOverview] = useState<boolean>(openChatChannelDetailsPage)
    const [showMembers, setShowMembers] = useState<boolean>(false)
    const [showMedia, setShowMedia] = useState<boolean>(false)
    const [showFiles, setShowFiles] = useState<boolean>(false)
    const [showLinks, setShowLinks] = useState<boolean>(false)
    const [showGroups, setShowGroups] = useState<boolean>(false);

    const openOverview = () =>{
        setShowOverview(true);
        setShowMembers(false);
        setShowMedia(false);
        setShowFiles(false);
        setShowLinks(false);
        setShowGroups(false);
    };
    const openMembers = () =>{
        setShowMembers(true);
        setShowOverview(false);
        setShowMedia(false);
        setShowFiles(false);
        setShowLinks(false);
        setShowGroups(false);
    };
    const openMedia = () =>{
        setShowMedia(true);
        setShowOverview(false);
        setShowMembers(false);
        setShowFiles(false);
        setShowLinks(false);
        setShowGroups(false);
    };
    const openFiles = () =>{
        setShowFiles(true);
        setShowOverview(false);
        setShowMembers(false);
        setShowMedia(false);
        setShowLinks(false);
        setShowGroups(false);
    }
    const openLinks = () =>{
        setShowLinks(true);
        setShowOverview(false);
        setShowMembers(false);
        setShowMedia(false);
        setShowFiles(false);
        setShowGroups(false);
    }
    const openGroups = () =>{
        setShowGroups(true);
        setShowOverview(false);
        setShowMembers(false);
        setShowMedia(false);
        setShowFiles(false);
        setShowLinks(false);
    }

    const [channelMenus, setChannelMenus] = useState([
        {
            _id: "1",
            icon: IoIosInformationCircleOutline,
            name: "Overview",
            func:openOverview,
            // show:showGeneral
        },
        {
            _id: "2",
            icon: RiGroupLine,
            name: "Members",
            func:openMembers,
            // show:showAccount
        },
        {
            _id: "3",
            icon: GiMusicalScore,
            name: "Media",
            func:openMedia,
            // show:showChats
        },
        {
            _id: "4",
            icon: FaRegFile,
            name: "Files",
            func:openFiles,
            // show:showNotifications
        },
        {
            _id: "5",
            icon: MdInsertLink,
            name: "Links",
            func:openLinks,
            // show:showPersonalizations
        },
        {
            _id: "6",
            icon: RiGroupLine,
            name: "Groups",
            func:openGroups,
            // show:showStorage
        },
    ])

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const isClickInsideDeleteIcon = event.target.closest(".ChatChannelDetails");
            if (!isClickInsideDeleteIcon) {
                setOpenChatChannelDetailsPage(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    console.log("overviewDetails",overviewDetails);
    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className={`ChatChannelDetails h-[60vh] m-5 flex flex-1 fixed sm:w-[520px] bg-white rounded-md overflow-hidden z-50 duration-300 ease-in-out ${openChatChannelDetailsPage?"opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"}`}>
            <div className="h-[60vh] flex flex-col w-44 border-r-2 border-r-soft-gray bg-light-gray text-md p-2">

                <div className=" relative overflow-auto pb-10 space-y-3">
                    {
                        channelMenus?.map(menu=><div onClick={menu.func} className='flex items-center gap-5 cursor-pointer hover:bg-soft-gray p-1 rounded-md'>
                        <menu.icon />
                        <p>{menu.name}</p>
                    </div>)
                    }
                    
                </div>
            </div>

            <div className="flex-1 w-full  h-full flex flex-col relative overflow-auto ">
                {
                   showOverview && <Overview  img={img} name={name}  overviewDetails = {overviewDetails}/> 
                }
                {
                   showMembers && <Members/> 
                }
                {
                   showMedia && <Media/> 
                }
                {
                   showFiles && <Files/> 
                }
                {
                   showLinks && <Links/> 
                }
                {
                   showGroups && <Groups/> 
                }
            </div>
        </div>
    );
};

export default ChatChannelDetails;