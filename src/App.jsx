import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import './App.css'
// import ThemeUIBtn from './components/ThemeUIBtn'
import { MdLightMode } from "react-icons/md";
import ThemeUIBtn from './components/ThemeUIBtn';

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
      <header className="bg-ivory p-4 text-soft-black dark:bg-dark-navy">
  <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold text-teal dark:text-light-cyan">&lt;Omkar/&gt;</h1>
    <ThemeUIBtn/>
  </div>
  <nav>
    <ul className="flex space-x-4 text-slate-gray dark:text-light-cyan">
      <li className="hover:text-sky-blue">Home</li>
      <li className="hover:text-sky-blue">About</li>
      <li className="hover:text-sky-blue">Projects</li>
      <li className="hover:text-sky-blue">Contact</li>
    </ul>
  </nav>
</header>

    </ThemeProvider>
  )
}

export default App
