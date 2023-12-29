import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'

import Image from 'next/image'
import theme from '@/app/theme/theme'

import about1 from './about1.jpg'
import about2 from './about2.jpg'

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
          <Grid
            item
            sm={12}
            md={4}
            sx={{
              display: 'flex'
            }}
          >
            <Image
              src={about1}
              height={0}
              width={0}
              priority
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover'
              }}
              alt={'picture of food'}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '500px',
                padding: '20px',
                textAlign: 'center',
                backgroundColor: theme.palette.background.secondBackgroundColor
              }}
            >
              <Typography
                variant={'subtitle1'}
                fontWeight={theme.typography.fontWeightBold}
                fontFamily={theme.typography.fontFamily[0]}
                color={theme.palette.text.secondary}
              >
                Taste perception
              </Typography>
              <Typography
                variant={'h1'}
                sx={{
                  marginBottom: '40px'
                }}
                fontWeight={theme.typography.fontWeightBold}
              >
                TRADITIONAL & MODERN
              </Typography>
              <Typography
                variant={'body1'}
                color={theme.palette.text.secondary}
                sx={{
                  marginBottom: '20px'
                }}
              >
                LLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, culpa.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            sx={{
              display: 'flex'
            }}
          >
            <Image
              src={about2}
              height={0}
              width={0}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover'
              }}
              alt={'picture of food'}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs
