import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  console.log("📌 Chat data:", data); // Debugging log

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName || "No User Selected"}</span>
        <div className="chatIcons">
          {/* Icons can be added here */}
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
