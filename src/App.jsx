import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import './App.css'
import Headers from './components/Header/Header'
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Headers/> 
      <section id = "home"className='bg-ivory dark:bg-dark-navy p-4 m-5 shadow-md'>home</section>
    </ThemeProvider>
  )
}

export default App
