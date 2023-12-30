import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import theme from '@/app/theme/theme'

export const Footer = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundColor: theme.palette.common.black,
        padding: '40px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center',
              marginBottom: '20px',
              [theme.breakpoints.up('md')]: {
                marginBottom: '0px'
              }
            }}
          >
            <Typography
              sx={{
                marginBottom: '20px'

              }}
              variant={'h5'}
              fontWeight={theme.typography.fontWeightBold}
            >
              INFORMATION
            </Typography>
            <Typography
              sx={{
                marginBottom: '10px'
              }}
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              99-999 Warsaw
            </Typography>
            <Typography
              sx={{
                marginBottom: '10px'
              }}
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Call us: 999-999-999
            </Typography>
            <Typography
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Email : example@example.com
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center'
            }}
          >
            <Typography
              sx={{
                marginBottom: '20px'
              }}
              variant={'h5'}
              fontWeight={theme.typography.fontWeightBold}
            >
              WORKING HOURS
            </Typography>
            <Typography
              sx={{
                marginBottom: '10px'
              }}
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Monday - Friday 08:00 am to 12:00 pm
            </Typography>
            <Typography
              sx={{
                marginBottom: '10px'
              }}
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Saturday 10:00 am to 03:00 pm
            </Typography>
            <Typography
              variant={'body2'}
              color={theme.palette.text.secondary}
            >
              Sunday 12:00 pm to 05:00 pm
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
