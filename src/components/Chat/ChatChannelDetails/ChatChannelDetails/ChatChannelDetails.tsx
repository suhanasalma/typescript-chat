// import React, { useEffect, useState } from 'react';
// import { IoIosInformationCircleOutline } from 'react-icons/io';
// import { GiMusicalScore } from "react-icons/gi";
// import { FaRegFile, FaUsers } from "react-icons/fa";
// import { AiTwotoneInfoCircle } from "react-icons/ai";
// import { BsMusicNoteList } from "react-icons/bs";
// import { BsQrCode } from "react-icons/bs";
// import { MdInsertLink } from 'react-icons/md';
// import { RiGroupLine } from "react-icons/ri";
// import Overview from '../Overview/Overview';
// import Members from '../Members/Members';
// import Media from '../Media/Media';
// import Files from '../Files/Files';
// import Links from '../Links/Links';
// import Groups from '../Groups/Groups';
// import { ChatIndexList } from '../../../../Interfaces/Interfaces';

// interface ChatChannelDetailsProps {
//     openChatChannelDetailsPage:boolean
//     setOpenChatChannelDetailsPage: React.Dispatch<React.SetStateAction<boolean>>;
//     overviewDetails:any
//     img: string;
//     name: string;
//     channel:ChatIndexList
// }

// const ChatChannelDetails = ({openChatChannelDetailsPage,setOpenChatChannelDetailsPage,overviewDetails,img,name,channel}:ChatChannelDetailsProps) => {
//     const [showOverview, setShowOverview] = useState<boolean>(true)
//     const [showMembers, setShowMembers] = useState<boolean>(false)
//     const [showMedia, setShowMedia] = useState<boolean>(false)
//     const [showFiles, setShowFiles] = useState<boolean>(false)
//     const [showLinks, setShowLinks] = useState<boolean>(false)
//     const [showGroups, setShowGroups] = useState<boolean>(false);
//     const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);


//     console.log("openChatChannelDetailsPage",openChatChannelDetailsPage);

//     const handleMenuClick = (index: number) => {
//         setActiveMenuIndex(index);
//     };

//     const openOverview = () =>{
//         setShowOverview(true);
//         setShowMembers(false);
//         setShowMedia(false);
//         setShowFiles(false);
//         setShowLinks(false);
//         setShowGroups(false);
//         setActiveMenuIndex(0)
//     };
//     const openMembers = () =>{
//         setActiveMenuIndex(1)
//         setShowMembers(true);
//         setShowOverview(false);
//         setShowMedia(false);
//         setShowFiles(false);
//         setShowLinks(false);
//         setShowGroups(false);
       
//     };
//     const openMedia = () =>{
//         setShowMedia(true);
//         setShowOverview(false);
//         setShowMembers(false);
//         setShowFiles(false);
//         setShowLinks(false);
//         setShowGroups(false);
//         setActiveMenuIndex(2)
//     };
//     const openFiles = () =>{
//         setShowFiles(true);
//         setShowOverview(false);
//         setShowMembers(false);
//         setShowMedia(false);
//         setShowLinks(false);
//         setShowGroups(false);
//         setActiveMenuIndex(3)
//     }
//     const openLinks = () =>{
//         setShowLinks(true);
//         setShowOverview(false);
//         setShowMembers(false);
//         setShowMedia(false);
//         setShowFiles(false);
//         setShowGroups(false);
//         setActiveMenuIndex(4)
//     }
//     const openGroups = () =>{
//         setShowGroups(true);
//         setShowOverview(false);
//         setShowMembers(false);
//         setShowMedia(false);
//         setShowFiles(false);
//         setShowLinks(false);
//         setActiveMenuIndex(5)
//     }

//     const [channelMenus, setChannelMenus] = useState([
//         {
//             _id: 0,
//             icon: IoIosInformationCircleOutline,
//             name: "Overview",
//             func:openOverview,
//             show:showOverview
//         },
//         {
//             _id: 1,
//             icon: RiGroupLine,
//             name: "Members",
//             func:openMembers,
//             show:showMembers
//         },
//         {
//             _id: 2,
//             icon: GiMusicalScore,
//             name: "Media",
//             func:openMedia,
//             show:showMedia
//         },
//         {
//             _id: 3,
//             icon: FaRegFile,
//             name: "Files",
//             func:openFiles,
//             show:showFiles
//         },
//         {
//             _id: 4,
//             icon: MdInsertLink,
//             name: "Links",
//             func:openLinks,
//             show:showLinks
//         },
//         {
//             _id: 5,
//             icon: RiGroupLine,
//             name: "Groups",
//             func:openGroups,
//             show:showGroups
//         },
//     ])

//     useEffect(() => {
//         const handleClickOutside = (event: any) => {
//             const isClickInsideDeleteIcon = event.target.closest(".ChatChannelDetails");
//             if (!isClickInsideDeleteIcon) {
//                 setOpenChatChannelDetailsPage(false);
//             }
//         };

//         document.body.addEventListener("click", handleClickOutside);

//         return () => {
//             document.body.removeEventListener("click", handleClickOutside);
//         };
//     }, []);


//     console.log("activeMenuIndex",activeMenuIndex);
//     return (
//         <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className={`ChatChannelDetails h-[60vh] m-5 flex flex-1 fixed sm:w-[520px] left-20 md:left-96 bg-white rounded-md overflow-hidden z-50 duration-300 ease-in-out ${openChatChannelDetailsPage?"opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"}`}>
//             <div className="h-[60vh] flex flex-col w-44 border-r-2 border-r-soft-gray bg-light-gray text-md p-2">

//                 <div className=" relative overflow-auto pb-10 space-y-3">
//                     {
//                         channelMenus?.map((menu,i)=><div  onClick={ menu.func} key={i}  className={`flex items-center gap-5 cursor-pointer hover:bg-soft-gray p-1 rounded-md ${activeMenuIndex === i ? 'bg-soft-gray' : ''}`}>
//                         <menu.icon />
//                         <p>{menu.name}</p>
//                     </div>)
//                     }
                    
//                 </div>
//             </div>

//             <div className="flex-1 w-full  h-full flex flex-col relative overflow-auto ">
//                 {
//                    showOverview && <Overview  img={img} name={name}  overviewDetails = {overviewDetails}/> 
//                 }
//                 {
//                    showMembers && <Members channel={channel}/> 
//                 }
//                 {
//                    showMedia && <Media/> 
//                 }
//                 {
//                    showFiles && <Files/> 
//                 }
//                 {
//                    showLinks && <Links/> 
//                 }
//                 {
//                    showGroups && <Groups/> 
//                 }
//             </div>
//         </div>
//     );
// };

// export default ChatChannelDetails;

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
import { ChatIndexList } from '../../../../Interfaces/Interfaces';

interface ChatChannelDetailsProps {
    openChatChannelDetailsPage:boolean
    setOpenChatChannelDetailsPage: React.Dispatch<React.SetStateAction<boolean>>;
    overviewDetails:any
    img: string;
    name: string;
    channel:ChatIndexList
}

const ChatChannelDetails = ({openChatChannelDetailsPage,setOpenChatChannelDetailsPage,overviewDetails,img,name,channel}:ChatChannelDetailsProps) => {
    const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);

    const channelMenus = [
        {
            icon: IoIosInformationCircleOutline,
            name: "Overview",
            component: Overview,
            props: { overviewDetails,img, name}
        },
        {
            icon: RiGroupLine,
            name: "Members",
            component: Members,
            props: { channel}
        },
        {
            icon: GiMusicalScore,
            name: "Media",
            component: Media
        },
        {
            icon: FaRegFile,
            name: "Files",
            component: Files
        },
        {
            icon: MdInsertLink,
            name: "Links",
            component: Links
        },
        {
            icon: RiGroupLine,
            name: "Groups",
            component: Groups
        },
    ];

    const handleMenuClick = (index: number) => {
        setActiveMenuIndex(index);
    };

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

    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className={`ChatChannelDetails h-[60vh] m-5 flex flex-1 fixed sm:w-[520px] left-20 md:left-96 bg-white rounded-md overflow-hidden z-50 duration-300 ease-in-out ${openChatChannelDetailsPage?"opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"}`}>
            <div className="h-[60vh] flex flex-col w-44 border-r-2 border-r-soft-gray bg-light-gray text-md p-2">

                <div className=" relative overflow-auto pb-10 space-y-3">
                    {channelMenus.map((menu, index) => (
                        <div
                            key={index}
                            onClick={() => handleMenuClick(index)}
                            className={`flex items-center gap-5 cursor-pointer hover:bg-soft-gray p-1 rounded-md ${activeMenuIndex === index ? 'bg-soft-gray' : ''}`}
                        >
                            {React.createElement(menu.icon)}
                            <p>{menu.name}</p>
                        </div>
                    ))}
                </div>
            </div>
           
            <div className="flex-1 w-full  h-full flex flex-col relative overflow-auto ">
                 {/* {React.createElement(channelMenus[activeMenuIndex].component, channelMenus[activeMenuIndex].props)} */}
                 {React.createElement(channelMenus[activeMenuIndex].component, channelMenus[activeMenuIndex].props)}
            </div>
        </div>
    );
};

export default ChatChannelDetails;

