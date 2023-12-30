import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import special1 from './special1.jpg'

import theme from '@/app/theme/theme'

export const SpecialFood = (props) => {
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
        maxWidth={'lg'}
        sx={{
          padding: '40px 12px'
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: theme.palette.background.secondBackgroundColor
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center'
            }}
          >
            <Typography
              variant={'subtitle1'}
              fontWeight={theme.typography.fontWeightBold}
              fontFamily={theme.typography.fontFamily[0]}
              color={theme.palette.text.secondary}
            >
              Food Safety
            </Typography>
            <Typography
              sx={{
                marginBottom: '40px'
              }}
              variant={'h1'}
              fontWeight={theme.typography.fontWeightBold}
            >
              THE BEST SPECIAL FOOD
            </Typography>
            <Typography
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque fuga! Labore consequuntur aperiam, repudiandae natus rem voluptas porro culpa?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Image
              src={special1}
              height={0}
              width={0}
              priority
              style={{
                width: '100%',
                height: '100%',
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

export default SpecialFood
