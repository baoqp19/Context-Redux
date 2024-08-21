import React from "react";
import Toggle from "./Toggle";
import Content from "./Content";
import "./Theme.css";
import { MyContext } from "../App";

import { useContext } from "react";
const Theme = () => {

  const { state } = useContext(MyContext);
  
  return (
    <div className={`main theme-${state.theme}`}>
      <Toggle />
      <Content />
    </div>
  );
};

export default Theme;
