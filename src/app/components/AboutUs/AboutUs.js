import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'

import Image from 'next/image'
import theme from '@/app/theme/theme'

import about1 from './about1.jpg'
import about2 from './about2.jpg'

const arrayItems = [
  {
    id: 1,
    img: about1,
    alt: 'picture of food'
  },
  {
    id: 2,
    subtitle: 'Taste perception',
    title: 'TRADITIONAL & MODERN',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, culpa.'
  },
  {
    id: 3,
    img: about2,
    alt: 'picture of food'
  }
]

export const AboutUs = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundColor: theme.palette.background.firstBackgroundColor
      }}
      {...otherProps}
    >
      <Container
        sx={{
          padding: '40px 12px'
        }}
        maxWidth={'lg'}
      >
        <Box
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
            special moments
          </Typography>
          <Typography
            variant={'h1'}
            sx={{
              marginBottom: '40px'
            }}
            fontWeight={theme.typography.fontWeightBold}
          >
            ABOUT US
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
        >
          {
            arrayItems.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={item.id}
                  sx={{
                    width: '100%'
                  }}
                >
                  {
                    item.img &&
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%'
                      }}
                    >
                      <Image
                        src={item.img}
                        width={0}
                        height={0}
                        alt={item.alt}
                        priority
                        style={{
                          width: '100%',
                          objectFit: 'cover',
                          height: '500px'
                        }}
                      />
                    </Box>
                  }
                  {
                    item.title &&
                    <Box
                      sx={{
                        height: '500px',
                        padding: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }}
                    >
                      <Typography
                        variant={'subtitle1'}
                        fontWeight={theme.typography.fontWeightBold}
                        fontFamily={theme.typography.fontFamily[0]}
                        color={theme.palette.text.secondary}
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        variant={'h3'}
                        sx={{
                          marginBottom: '40px'
                        }}
                        fontWeight={theme.typography.fontWeightBold}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant={'body1'}
                        color={theme.palette.text.secondary}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  }
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs
