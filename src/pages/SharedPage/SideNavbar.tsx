import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import userImg from '../../assests/user/not-available-user.png'

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../StateManagement/store/store";



type IconType = React.FC<{}>;

interface SideNavbarMenu  {
    id:string
    icon:IconType
    active:boolean
    click:()=>void
}

interface toggle {
  openChatList: () => void;
  openCallList: () => void;
  openStatus: () => void;
  openStaredMessages: () => void;
  openArchivedList: () => void;
  openSettings: () => void;
  openProfile: () => void;
  showChatLists: boolean;
  showCallList: boolean;
  showStatus: boolean;
  showStarredMessages: boolean;
  showArchivedList: boolean;
  showSettings: boolean;
  showProfile: boolean;
  SideNavbarMenuItems:SideNavbarMenu[]
}

const SideNavBar = ({
  openChatList,
  openCallList,
  openStatus,
  openStaredMessages,
  openArchivedList,
  openSettings,
  openProfile,
  showChatLists,
  showCallList,
  showStatus,
  showStarredMessages,
  showArchivedList,
  showSettings,
  showProfile,
  SideNavbarMenuItems
}: toggle) => {

  const auth = useSelector((state: RootState) => state?.auth)
  let user = auth.user;
  return (
    <div className="bg-light-gray text-gray  h-screen overflow-auto w-16  pb-10 flex flex-col justify-between gap-5 p-2">
      <div className="space-y-5 grid place-items-center">
        {
            SideNavbarMenuItems.map(item=> <p key={item?.id}
                onClick={item.click}
                className={`w-full py-2 rounded-md ${item.active && "bg-soft-gray"
                  } hover:bg-soft-gray cursor-pointer flex justify-center items-center`}
              >
                <item.icon />
              </p>)
        }
        {/* <p
          onClick={openChatList}
          className={`w-full py-2 rounded-md ${showChatLists && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer flex justify-center items-center`}
        >
          <PiChatCircleTextLight />
        </p>
        <p
          onClick={openCallList}
          className={`w-full py-2 rounded-md flex justify-center items-center ${showCallList && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer`}
        >
          <BsTelephone />
        </p>
        <p
          onClick={openStatus}
          className={`w-full py-2 rounded-md flex justify-center items-center text-lg ${showStatus && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer`}
        >
          <PiNumberCircleZeroThin />
        </p> */}
      </div>
      <div className="space-y-5 grid place-items-center pb-5">
        <p
          onClick={openStaredMessages}
          className={`w-full py-2 rounded-md flex justify-center items-center ${showStarredMessages && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer`}
        >
          <BsStar />
        </p>
        <p
          onClick={openArchivedList}
          className={`w-full py-2 rounded-md flex justify-center items-center ${showArchivedList && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer`}
        >
          <BsArchive />
        </p> 

        <hr className="border-soft-gray w-full" />
        <div
          onClick={openSettings}
          className={`w-full py-2 rounded-md flex justify-center items-center ${showSettings && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer`}
        >
          <IoSettingsOutline />
        </div>

        <div
          onClick={openProfile}
          className={`group w-full py-2 rounded-md cursor-pointer ${showProfile && "bg-soft-gray"
        } hover:bg-soft-gray flex flex-col justify-center items-center`}
        >
          <p className="text-xs text-center mx-1 rounded-sm  opacity-0 group-hover:opacity-100 duration-500 ease-in-out absolute bg-teal-green text-white font-medium bottom-16 px-1">{user?.name}</p>
          <img className="h-8 w-8 object-cover rounded-full" src={user?.img ? user?.img : userImg} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
