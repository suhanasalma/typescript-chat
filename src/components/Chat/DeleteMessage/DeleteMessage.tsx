import React from "react";


interface DeleteMessageProps {
    // setOpenModal:React.Dispatch<React.SetStateAction<boolean>>;
    closeDeleteModal:()=>void
  }
const DeleteMessage = ({closeDeleteModal}:DeleteMessageProps) => {
  return (
    <div className="w-full fixed top-0 lg:left-0 right-0 h-full z-50 bg-[rgb(255,255,255,.5)] ">
      <div className="flex justify-center items-center h-full w-11/12 mx-auto">
        <div className="bg-white rounded-lg overflow-hidden" style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
          <div className="p-6">
            <p className="font-bold text-soft-black text-lg">Delete message?</p>
            <p className="my-2 text-gray text-sm">
              You can delete messages for everyone or just for yourself
            </p>
          </div>

          <div className="bg-light-gray sm:h-20 flex items-center justify-center border-t-2 border-soft-gray">
            <div className="flex flex-wrap items-center justify-center gap-5 p-5">
              <button style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}} className="bg-teal-green text-white px-4 py-1 rounded-md">
                Delete for me
              </button>
              <button style={{boxShadow: " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}} className="bg-white px-4 py-1 rounded-md">
                Delete for everyone
              </button>
              <button onClick={closeDeleteModal} style={{boxShadow: " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}} className="bg-white px-4 py-1 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMessage;
