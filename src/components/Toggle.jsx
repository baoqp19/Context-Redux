import React, { useContext } from 'react'
import { MyContext } from '../App'

const Toggle = () => {
  const {state, setTheme} = useContext(MyContext);
  return (
    <button onClick={() => {
      setTheme(state.theme === "light" ? "dark" : "light")
    }}>
    Toggle {state.theme === "light" ? "dark" : "light"} Theme
    </button>
  )
}

export default Toggle