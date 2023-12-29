import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText
} from '@mui/material'

import Image from 'next/image'
import theme from '@/app/theme/theme'

import menu1 from './menu1.jpg'
import menu2 from './menu2.jpg'

export const Menu = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundColor: theme.palette.background.secondBackgroundColor
      }}
      {...otherProps}
    >
      <Container
        sx={{
          padding: '40px 12px'
        }}
        maxWidth={'lg'}
      >
        <Grid
          container
        >
          <Grid
            item
            width={'100%'}
          >
            <Grid
              spacing={2}
              container
              sx={{
                marginBottom: '30px',
                [theme.breakpoints.up('md')]: {
                  marginBottom: '60px'
                }
              }}
            >
              <Grid
                item
                sm={6}
              >
                <Box
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up('md')]: {
                      display: 'flex'
                    }
                  }}
                >
                  <Image
                    src={menu2}
                    height={0}
                    width={0}
                    priority
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '650px',
                      objectFit: 'cover'
                    }}
                    alt={'picture of food'}
                  />
                </Box>
              </Grid>
              <Grid
                sm={6}
                item
                width={'100%'}
              >
                <Box>
                  <Typography
                    variant={'subtitle1'}
                    fontWeight={theme.typography.fontWeightBold}
                    fontFamily={theme.typography.fontFamily[0]}
                    color={theme.palette.text.secondary}
                  >
                    our full menu
                  </Typography>
                  <Typography
                    variant={'h1'}
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    SPECIAL MEAL
                  </Typography>
                </Box>
                <List sx={{ width: '100%' }}>
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />

                </List>
              </Grid>
            </Grid>

          </Grid>
          <Grid
            item
            width={'100%'}
          >
            <Grid
              spacing={2}
              container
            >
              <Grid
                item
                sm={6}
                order={2}
              >
                <Box
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up('md')]: {
                      display: 'flex'
                    }
                  }}
                >
                  <Image
                    src={menu1}
                    height={0}
                    width={0}
                    priority
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '650px',
                      objectFit: 'cover'
                    }}
                    alt={'picture of food'}
                  />
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                width={'100%'}
              >
                <Box>
                  <Typography
                    variant={'subtitle1'}
                    fontWeight={theme.typography.fontWeightBold}
                    fontFamily={theme.typography.fontFamily[0]}
                    color={theme.palette.text.secondary}
                  >
                    our healthy food
                  </Typography>
                  <Typography
                    variant={'h1'}
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    OUR SPECIAL
                  </Typography>
                </Box>
                <List
                  sx={{

                    width: '100%'
                  }}
                >
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />
                  <ListItem alignItems={'flex-start'}>
                    <ListItemText
                      primary={
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                        >
                          <Typography
                            variant={'h6'}
                            fontWeight={theme.typography.fontWeightBold}
                          >
                            Fines tartare steak
                          </Typography>
                          <Typography
                            variant={'body2'}
                          >
                            $50
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.text.secondary}
                          variant={'body2'}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam?
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component={'li'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                    variant={'middle'}
                  />

                </List>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Menu
