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
    </ThemeProvider>
  )
}

export default App
