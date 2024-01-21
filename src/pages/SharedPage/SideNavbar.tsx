import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import user from '../../assests/user/user_avatar.png'
import { Link } from 'react-router-dom';


interface toggle {
    openChatList: () => void;
    openCallList: () => void;
    openStatus: () => void;
    openStaredMessages: () => void;
    openArchivedList: () => void;
    openSettings: () => void;
    openProfile: () => void;
    showChatUserList: boolean;
    showCallList: boolean;
    showStatus: boolean;
    showStartedMessages: boolean;
    showArchivedList: boolean;
    showSettings: boolean;
    showProfile: boolean;
}

const SideNavBar = ({
  openChatList,
  openCallList,
  openStatus,
  openStaredMessages,
  openArchivedList,
  openSettings,
  openProfile,
  showChatUserList,
  showCallList,
  showStatus,
  showStartedMessages,
  showArchivedList,
  showSettings,
  showProfile,
}: toggle) => {
  return (
    <div className="bg-light-gray text-gray  h-screen overflow-auto w-16  pb-10 flex flex-col justify-between gap-5 p-2">
      <div className="space-y-5 grid place-items-center">
        <Link
          to="/"
          onClick={openChatList}
          className={`w-full py-2 rounded-md ${
            showChatUserList && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer flex justify-center items-center`}
        >
          <PiChatCircleTextLight />
        </Link>
        <Link
          to="/"
          onClick={openCallList}
          className={`w-full py-2 rounded-md flex justify-center items-center ${
            showCallList && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer`}
        >
          <BsTelephone />
        </Link>
        <Link
          to="/"
          onClick={openStatus}
          className={`w-full py-2 rounded-md flex justify-center items-center ${
            showStatus && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer`}
        >
          <PiNumberCircleZeroThin onClick={openStatus} />
        </Link>
      </div>
      <div className="space-y-5 grid place-items-center">
        <Link
          to="/"
          onClick={openStaredMessages}
          className={`w-full py-2 rounded-md flex justify-center items-center ${
            showStartedMessages && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer`}
        >
          <BsStar />
        </Link>
        <Link
          to="/"
          onClick={openArchivedList}
          className={`w-full py-2 rounded-md flex justify-center items-center ${
            showArchivedList && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer`}
        >
          <BsArchive />
        </Link>

        <hr className="border-soft-gray w-full" />
        <div
          onClick={openSettings}
          className={`w-full py-2 rounded-md flex justify-center items-center ${
            showSettings && "bg-soft-gray"
          } hover:bg-soft-gray cursor-pointer`}
        >
          <IoSettingsOutline />
        </div>

        <div
          onClick={openProfile}
          className="h-10 w-10 rounded-md cursor-pointer hover:bg-soft-gray "
        >
          <img className="h-full w-full rounded-full" src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
