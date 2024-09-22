import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import './App.css'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'
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

  const siteProps = {
    name: "Omkar Tavva",
    title: "",
    email: "omkartavva@gmail.com",
    gitHub: "Omkar-t06",
    instagram: "omkar_t6",
    linkedIn: "omkar-tavva",
  };

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Headers/>
      <section id = 'home' className = 'bg-ivory dark:bg-dark-navy p-4 m-5 shadow-md h-60'>home</section>
      <Footer {...siteProps}/>
    </ThemeProvider>
  )
}

export default App
