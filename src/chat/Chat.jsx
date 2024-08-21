import "bootstrap/dist/css/bootstrap.min.css";
import "./chat.css";
import React from "react";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";

const Chat = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 justify-content-center">
          <div className="chat-box p-2">
            <ChatMessage />
            <ChatForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
