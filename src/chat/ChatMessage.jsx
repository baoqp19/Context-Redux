import { useSelector } from "../core/hook";

import React, { useEffect } from "react";

const ChatMessage = () => {

  // lấy thông tin của chatMessages
  const { chatMessages } = useSelector();

  useEffect(() => {
    console.log("Message Thay doi")
  }, [chatMessages])
  
  return (
    <div className="chat-message">
      {chatMessages.map((item, index) => (
        <div className="message-item mb-3" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
