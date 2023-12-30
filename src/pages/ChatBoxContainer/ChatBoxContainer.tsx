import React from "react";
import ChatBoxHeader from "../../components/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chatbox/Chatbox";
import ChatboxFooter from "../../components/ChatboxFooter/ChatboxFooter";

const ChatBoxContainer: React.FC = () => {
  return (
    <div className="flex-1 pt-12 relative">
            <ChatBoxHeader />
            <Chatbox />
            <ChatboxFooter />
    </div>
  );
};

export default ChatBoxContainer;
