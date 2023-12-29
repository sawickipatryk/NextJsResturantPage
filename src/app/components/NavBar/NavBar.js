'use client'
import * as React from 'react'
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import theme from '@/app/theme/theme'

const pages = ['HOME', 'ABOUT US', 'MENU', 'CONTACT']

export const NavBar = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar
      {...otherProps}
      position={'static'}
      sx={{
        backgroundColor: theme.palette.background.navBarBackgroundColor
      }}
    >
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '5px',
              flexGrow: 1
            }}
          >
            <AdbIcon
              sx={{
                color: theme.palette.primary.main
              }}
              fontSize={'large'}
            />
            <Typography
              variant={'h4'}
              noWrap
              component={'a'}
              href={'/'}
              sx={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  p: 3,
                  display: 'block',
                  '&:hover': {
                    color: '#fff'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          >
            <IconButton
              size={'large'}
              aria-label={'menu'}
              aria-controls={'menu-appbar'}
              aria-haspopup={'true'}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                fontSize={'large'}
                sx={{
                  color: theme.palette.primary.main
                }}
              />
            </IconButton>
            <Menu
              id={'menu-appbar'}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiMenu-paper': {
                  width: '100%',
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.background.navBarBackgroundColor
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    padding: '12px 16px'
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign={'center'}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              gap: '5px',
              flexGrow: 2
            }}
          >
            <AdbIcon
              sx={{
                color: theme.palette.primary.main
              }}
              fontSize={'large'}
            />
            <Typography
              variant={'h4'}
              noWrap
              component={'a'}
              href={'/'}
              sx={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold
              }}
            >
              LOGO
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
