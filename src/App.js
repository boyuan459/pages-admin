import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { store } from 'redux/store'
import { theme, GlobalStyles } from 'styles/globalStyles'
import AppRouter from './AppRouter' 

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="app">
          <GlobalStyles />
          <AppRouter />
        </div>
      </Provider>
    </ThemeProvider>
  )
}

export default App
