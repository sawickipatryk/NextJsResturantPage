import React from 'react'
import { Box } from '@mui/material'

import contactBgI from './contactBgI.jpg'

import ContactForm from '../ContactForm'

export const Contact = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${contactBgI.src})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundAttachment: 'fixed'
      }}
      {...otherProps}
    >
      <ContactForm/>
    </Box>
  )
}

export default Contact
