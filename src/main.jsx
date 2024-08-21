import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./core/Provider.jsx";
import App02 from "./App02.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      {/* <App /> */}
      <App02 />
    </Provider>
  </React.StrictMode>
);
