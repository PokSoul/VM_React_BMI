import React from 'react'
import GlobalStyle from '../config/globalStyle'
import { darkTheme, lightTheme } from '../config/themes'
import Routes from '../config/router'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProviderStored = () => {
  const theme = useSelector(state => state.theme.value)
  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </ThemeProvider>
  )
}

export default ProviderStored
