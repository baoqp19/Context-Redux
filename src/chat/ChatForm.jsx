import React, { useState } from "react";
import { useDispatch } from "../core/hook";

const ChatForm = () => {

  const [message, setMessage] = useState("");

  // dùng cái này để lấy ra hàm dispatch 
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();  // form nó gửi lên server là reload lại web
    dispatch({
        type: "chat/sendMessage",
        payload: message,
    })
    setMessage("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-group input-group-sm">
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Tin nhắn..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button className="btn btn-primary">Gửi</button>
      </div>
    </form>
  );
};

export default ChatForm;
