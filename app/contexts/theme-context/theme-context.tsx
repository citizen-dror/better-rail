import React, { createContext, useEffect, useState } from "react"
import { Appearance } from "react-native"
import { LightTheme, DarkTheme, Theme } from "../../theme"

const initMode = (Appearance.getColorScheme() === "dark") ? DarkTheme : LightTheme

type ThemeContextType = {
  theme: Theme
  setTheme: (value: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
// export const ThemeContext = createContext(null)

type Props = {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(initMode)
  useEffect(() => {
    const listener = () => {
      const colorScheme = Appearance.getColorScheme()
      console.log('listener Appearance', colorScheme)
      setThemeByName(colorScheme)
    }
    Appearance.addChangeListener(listener)
    return () => {
      Appearance.removeChangeListener(listener)
    }
  }, [])
  const setThemeByName = (name: string) => {
    const them1 = (name === "dark") ? DarkTheme : LightTheme
    setTheme(them1)
  }
  // console.log("theme back", theme.background)
  return (
        <ThemeContext.Provider value={{
          theme,
          setTheme: (name) => {
            setThemeByName(name)
          },
        }}>
            {children}
        </ThemeContext.Provider>
  )
}
export default ThemeProvider
