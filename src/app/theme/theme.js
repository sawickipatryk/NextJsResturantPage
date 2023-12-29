'use client'
import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: '#fff'
    },
    background: {
      firstBackgroundColor: '#fff',
      secondBackgroundColor: '#fff',
      navBarBackgroundColor: '#fff'
    }
  },
  shape: {
    borderRadius: 4
  },
  shadows: {
    0: '0 15px 50px 0 #0000001a;'
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '42px'
    },
    h3: {
      fontSize: '38px'
    },
    h4: {
      fontSize: '32px'
    },
    h5: {
      fontSize: '28px'
    },
    h6: {
      fontSize: '22px'
    },
    subtitle1: {
      fontSize: '28px'
    },
    body1: {
      fontSize: '18px',
      letterSpacing: '0.3px'
    },
    body2: {
      fontSize: '17px'
    },
    button: {
      fontSize: '16px'
    }
  }

})

export default responsiveFontSizes(theme)
