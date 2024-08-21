import React from "react";
import { useDispatch, useSelector } from "../core/hook";

const Message = () => {
  const state = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        {state.message}
        <button
          onClick={() => {
            dispatchEvent({
              type: "message/update",
              payload: "Học React không khó",
            });
          }}
        >
          update
        </button>
      </h2>
    </div>
  );
};

export default Message;
