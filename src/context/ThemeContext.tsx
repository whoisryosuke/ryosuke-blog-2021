import React, { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as StyledProvider, ThemeContext as StyledThemeContext } from "styled-components"
import { isDarkMode } from "../helpers/isDarkMode"
import THEMES from "../theme"

export type ThemeNames = "light" | "dark"
export type ThemeValue = {
  theme: ThemeNames
  setTheme?: React.Dispatch<React.SetStateAction<ThemeNames>>
}
export const ThemeContext = createContext<ThemeValue>({
  theme: `light`,
})

interface Props {
  children: React.ReactNode
}
export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeNames>(`light`)

  useEffect(() => {
    if (isDarkMode()) {
      setTheme(`dark`)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledProvider theme={THEMES[theme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}
export const useThemeValue = () => useContext(ThemeContext)
export const useTheme = () => useContext(StyledThemeContext)
