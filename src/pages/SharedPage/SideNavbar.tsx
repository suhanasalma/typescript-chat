import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import userImg from "../../assests/user/not-available-user.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../StateManagement/store/store";

interface SideNavbarMenu {
  id: string;
  icon: React.FC<{}>;
  active: boolean;
  click: () => void;
}

interface toggle {
  openProfile: () => void;
  showProfile: boolean;
  SideNavbarMenuItems: SideNavbarMenu[];
  SideNavbarSecondMenuItems: SideNavbarMenu[];
}

const SideNavBar = ({
  openProfile,
  showProfile,
  SideNavbarMenuItems,
  SideNavbarSecondMenuItems,
}: toggle) => {
  const auth = useSelector((state: RootState) => state?.auth);
  let user = auth.user;
  return (
    <div className="bg-light-gray text-gray  h-screen overflow-auto w-14  pb-10 flex flex-col justify-between gap-5 p-2">
      <div className="space-y-5 grid place-items-center">
        {SideNavbarMenuItems?.map((item) => (
          <p
            key={item?.id}
            onClick={item.click}
            className={`w-full py-2 rounded-md ${
              item.active && "bg-soft-gray"
            } hover:bg-soft-gray cursor-pointer flex justify-center items-center`}
          >
            <item.icon />
          </p>
        ))}
      </div>
      <div className="space-y-5 grid place-items-center pb-5">
        {SideNavbarSecondMenuItems?.map((item, index) => (
          <React.Fragment key={item?.id}>
            <p
              onClick={item.click}
              className={`w-full py-2 rounded-md ${
                item.active && "bg-soft-gray"
              } hover:bg-soft-gray cursor-pointer flex justify-center items-center`}
            >
              <item.icon />
            </p>
            {(index + 1) % 2 === 0 &&
              index !== SideNavbarSecondMenuItems.length - 1 && (
                <hr className="border-soft-gray w-full" />
              )}
          </React.Fragment>
        ))}

        <div
          onClick={openProfile}
          className={`group w-full py-2 rounded-md cursor-pointer ${
            showProfile && "bg-soft-gray"
          } hover:bg-soft-gray flex flex-col justify-center items-center`}
        >
          <p className="text-xs text-center mx-1 rounded-sm  opacity-0 group-hover:opacity-100 duration-500 ease-in-out absolute bg-teal-green text-white font-medium bottom-16 px-1">
            {user?.name}
          </p>
          <img
            className="h-6 w-6 object-cover rounded-full"
            src={user?.img ? user?.img : userImg}
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
