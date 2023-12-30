import React from 'react'
import {
  Box,
  Container,
  Grid, Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import theme from '@/app/theme/theme'
import Image from 'next/image'
import tips1 from './tips1.jpg'

const arrayOfTips = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusamus'
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusamus'
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusamus'
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusamus'
  }
]

export const UsefulTips = (props) => {
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
          spacing={2}
          container
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box >
              <Image
                src={tips1}
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
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant={'subtitle1'}
                fontWeight={theme.typography.fontWeightBold}
                fontFamily={theme.typography.fontFamily[0]}
                color={theme.palette.text.secondary}
              >
                Professional Chefs
              </Typography>
              <Typography
                variant={'h1'}
                fontWeight={theme.typography.fontWeightBold}
              >
                USEFUL TIPS
              </Typography>
            </Box>
            <List sx={{ width: '100%' }}>
              {
                    arrayOfTips.map((listItem) => {
                      return (
                        <List
                          key={listItem.id}
                        >
                          <ListItem>
                            <ListItemIcon
                              sx={{
                                color: theme.palette.text.secondary
                              }}
                            >
                              <CheckIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant={'body2'}
                                  sx={{
                                    color: theme.palette.text.secondary
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusamus.
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                      )
                    })
                  }

            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default UsefulTips
