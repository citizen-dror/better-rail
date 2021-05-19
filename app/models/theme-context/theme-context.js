import React, { createContext, useEffect, useState } from "react"
import { Appearance } from "react-native"
import { themes } from "../../theme"

const initMode = (Appearance.getColorScheme() === "dark") ? themes.dark : themes.light

export const ThemeContext = createContext({})
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initMode)
  useEffect(() => {
    const listener = () => {
      const colorScheme = Appearance.getColorScheme()
      // console.log('listener Appearance', colorScheme)
      setThemeByName(colorScheme)
    }
    Appearance.addChangeListener(listener)
    return () => {
      Appearance.removeChangeListener(listener)
    }
  }, [])
  const setThemeByName = (name) => {
    const them1 = (name === "dark") ? themes.dark : themes.light
    setTheme(them1)
  }
  // console.log("theme back", theme.background)
  return (
        <ThemeContext.Provider value={{
          theme,
          setTheme: (name) => {
            const them1 = (name === "dark") ? themes.dark : themes.light
            setThemeByName(them1)
          },
        }}>
            {children}
        </ThemeContext.Provider>
  )
}
export default ThemeProvider
