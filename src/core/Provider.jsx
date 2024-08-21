import React from "react";

import { createContext } from "react";
import { useReducer } from "react";
import { rootReducer, initialState } from "./rootReducer";

export const ProviderContext = createContext();

const Provider = ({ children }) => {
  //state
  // dispatch
  // tạo thêm cái rootReducer
  
const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <ProviderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

/*
<Provider> 
    <Component 1/>
    <Component 2/>
    <Component 3/>
    ---> children props
<Provider/>
*/
