import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useTheme from '../../context/theme';

function ThemeUIBtn() {

  const {themeMode, lightTheme ,darkTheme} = useTheme();

  const onClickHandler = () => {
    if(themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  const Icon = themeMode === "dark" ? MdLightMode : MdDarkMode;
  return (
    <button 
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300' 
      onClick={onClickHandler}
    >
      <Icon className='w-6 h-6 text-teal dark:text-light-cyan dark:text-orange-400 hover:fill-orange-500 dark:hover:fill-orange-400'/>
    </button>
  )
}

export default ThemeUIBtn