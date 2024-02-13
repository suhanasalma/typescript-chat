import React, { useState } from "react";
import background from "../../../assests/background/2.jpg";
import { MessageInterface } from "../../../Interfaces/Interfaces";
import { useParams } from "react-router-dom";
import { useGetChatIndexDetailsByIdQuery } from "../../../StateManagement/services/chatApi";
import Message from "./Message";
import DeleteMessage from "../DeleteMessage/DeleteMessage";

interface Messages {
  messages: MessageInterface[];
}

const Chatbox = ({ messages }: Messages) => {
  const { id } = useParams<{ id?: string }>();
  const {data} = useGetChatIndexDetailsByIdQuery({id});
  let backgroundImg = data?.background? data?.background : background;
  const [messageToDelete,setMessageToDelete] = useState<MessageInterface| null>(null);
  const [openDeleteModal,setOpenModal] = useState(false);

  const showDeleteModal = (msg:MessageInterface) =>{
    setMessageToDelete(msg)
    setOpenModal(true)
  };

  const closeDeleteModal = () =>{
    setMessageToDelete(null)
    setOpenModal(false)
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="flex-grow relative overflow-auto  "
    >
      <div className="px-4 text-soft-black">
        <div className={`flex flex-col items-end justify-end h-full pb-14 `}>
          {messages?.map((message, index) => (
            <Message showDeleteModal={showDeleteModal} message={message}/>
          ))}
        </div>
      </div>
      {openDeleteModal && <DeleteMessage closeDeleteModal={closeDeleteModal}/>}
    </div>
  );
};

export default Chatbox;
