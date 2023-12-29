import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'

export const metadata = {
  title: 'Restuarant'
}

export const RootLayout = ({ children }) => {
  return (
    <html lang={'en'}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
export default RootLayout
