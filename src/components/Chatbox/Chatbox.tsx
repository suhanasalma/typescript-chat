import React from "react";
import bakcground from "../../assests/background/1.jpg";
import ChatboxFooter from "../ChatboxFooter/ChatboxFooter";


const Chatbox = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bakcground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
      }}
      className="px-4 flex-1 text-red-800 mt-2 h-[82vh] overflow-auto"
    >
     
    </div>
  );
};

export default Chatbox;
