import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Main/Home/Home'
import About from './components/Main/About/About'
import Portfolio from './components/Main/Portfolio/Portfolio'
import Contact from './components/Main/Contact/Contact'

function App() {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("theme") || "light"
  )

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);

    localStorage.setItem("theme", themeMode);
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
      <main className='bg-ivory dark:bg-dark-navy text-teal dark:text-light-cyan flex flex-col'>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer {...siteProps}/>
    </ThemeProvider>
  )
}

export default App
