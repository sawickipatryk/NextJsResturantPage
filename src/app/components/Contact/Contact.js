import React from 'react'
import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import contactBgI from './contactBgI.jpg'

import ContactForm from '../ContactForm'

export const Contact = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit, rest } = methods

  const onSubmit = handleSubmit(
    (data, e) => {
      rest()
    },
    (errors, e) => {

    }
  )

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
        backgroundAttachment: 'fixed',
        padding: '40px 12px'
      }}
      {...otherProps}
    >
      <FormProvider
        {...methods}
      >
        <ContactForm
          onSubmit={onSubmit}
        />
      </FormProvider>

    </Box>
  )
}

export default Contact
