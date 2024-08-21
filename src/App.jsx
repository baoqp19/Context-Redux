import React, { useState } from "react";
import Theme from "./components/Theme";

export const MyContext = React.createContext();
console.log(MyContext);

const App = () => {
  const [state, setState] = useState({
    theme: "light",
  });

  const setTheme = (theme) => {
    setState({ ...state, theme }); // spread ...state nếu trong state có 2 thuộc tính nếu thay đổi thuộc tính khác thì thuộc tính kia k bị mất
  };

  return (
    <MyContext.Provider value={{ state, setTheme }}>
      {/* các Component nằm trong này hoặc nằm trong Theme thì vẫn lấy được giá trịtrị */}
      <Theme />
    </MyContext.Provider>
  );
};

export default App;

/*
  -theme
    -Toggle
    -Content

1. đối tượng context


2. provider


3. consumer
*/
