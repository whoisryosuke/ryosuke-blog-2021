import React from "react"
import { ThemeProvider } from "../context/ThemeContext"

const AppWrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default AppWrapper
