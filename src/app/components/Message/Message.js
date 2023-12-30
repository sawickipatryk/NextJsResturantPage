import theme from '@/app/theme/theme'
import {
  Box,
  Backdrop,
  Button,
  Typography
} from '@mui/material'
import * as React from 'react'

export const Message = (props) => {
  const {
    sx,
    handleClose,
    open,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            height: '300px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '5px',
            textAlign: 'center'

          }}
        >
          <Typography
            fontWeight={theme.typography.fontWeightMedium}
            sx={{
              color: 'black',
              marginBottom: '20px'
            }}
            variant={'h5'}
          >
            Your Message Was Send!
          </Typography>
          <Button
            onClick={handleClose}
            variant={'contained'}
          >
            Back
          </Button>
        </Box>
      </Backdrop>
    </Box>
  )
}

export default Message
