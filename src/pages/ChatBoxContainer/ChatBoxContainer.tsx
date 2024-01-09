import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chatbox/Chatbox";
import ChatboxFooter from "../../components/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { Message } from "../../Interfaces/Interfaces";

const ChatBoxContainer: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [userId, setUserId] = useState<number | undefined>(id ? + id : undefined);


  useEffect(() => {
    setUserId(id ? + id : undefined);
  }, [id]);

  const [messages,setMessages] = useState<Message[]>([
    {
      _id:1,
      content:"hi my name is suha",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:1,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
    {
      _id:2,
      content:"hi how are you",
      type:"text",
      timestamp:new Date(),
      sender:1,
      receiver:5,
      received:true,
      read:true,
    },
    {
      _id:3,
      content:"this is the last msg",
      type:"text",
      timestamp:new Date(),
      sender:5,
      receiver:1,
      received:true,
      read:true,
    },
  ])
  return (
    <div className="flex-1 pt-12 relative">
            <ChatBoxHeader />
            <Chatbox messages={messages} userId={userId}/>
            <ChatboxFooter />
    </div>
  );
};

export default ChatBoxContainer;
