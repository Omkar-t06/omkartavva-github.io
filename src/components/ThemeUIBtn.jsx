import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useTheme from '../context/theme';

function ThemeUIBtn() {

  const {themeMode, lightTheme ,darkTheme} = useTheme();

  const onClickHandler = (e) => {
    if(themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  const icon = themeMode === "dark" ? <MdLightMode className='fill-light-cyan'/> : <MdDarkMode className='fill-teal'/>;
  return (
    <div>
      <button className='p-2' onClick={onClickHandler}>{icon}</button>
    </div>
  )
}

export default ThemeUIBtn