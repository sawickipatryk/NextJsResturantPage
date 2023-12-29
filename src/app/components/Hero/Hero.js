import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import bgcHero from './bgcHero.jpg'
import theme from '@/app/theme/theme'

export const Hero = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${bgcHero.src})`,
        width: '100%',
        height: '70vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...otherProps}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
        'linear-gradient(0deg, #183D3D 0%, rgba(1, 1, 1, 0.2) 100%);'
        }}
      >
      </Box>
      <Box
        position={'absolute'}
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography
          variant={'subtitle1'}
          fontWeight={theme.typography.fontWeightBold}
          fontFamily={theme.typography.fontFamily[0]}
          color={theme.palette.text.secondary}
        >
          welcome to our delicious courses
        </Typography>
        <Typography
          variant={'h1'}
          sx={{
            marginBottom: '40px'
          }}
          fontWeight={theme.typography.fontWeightBold}
        >
          BEHIND THE DISHES
        </Typography>
        <Typography
          variant={'body1'}
          color={theme.palette.text.secondary}
          sx={{
            marginBottom: '20px'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil assumenda impedit cum sit quia
        </Typography>
        <Button
          variant={'contained'}
          sx={{
            color: '#fff'
          }}
        >
          Menu
        </Button>
      </Box>
    </Box>
  )
}

export default Hero
