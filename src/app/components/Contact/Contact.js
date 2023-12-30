import React, { useRef } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'

import theme from '@/app/theme/theme'

import isEmail from 'validator/lib/isEmail'
import emailjs from '@emailjs/browser'

import Message from '../Message'

import { useForm } from 'react-hook-form'

import contactBgI from './contactBgI.jpg'

export const Contact = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
    window.location.reload(true)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const {
    sx,
    ...otherProps
  } = props

  const form = useRef()

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICEID,
        process.env.NEXT_PUBLIC_TEMPLATEID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLICKEY
      )
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const methods = useForm()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitSuccessful }
  } = methods

  const registeredNameProps = register('customerName', {
    required: {
      value: true,
      message: 'name is required'
    }
  })
  const registeredPhoneNumberProps = register('mobileNumber', {
    required: {
      value: true,
      message: 'mobile phone is required'
    }
  })
  const registeredEmailProps = register('emailAddres', {
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'Wrong Email'
  })
  const registeredPostcodeProps = register('postcode', {
    required: {
      value: true,
      message: 'postocde is required'
    }
  })
  const registeredMessageProps = register('message', {
    required: {
      value: true,
      message: 'message is required'
    }
  })

  const onSubmit = handleSubmit(
    (data, e) => {
      sendEmail()
      handleOpen()
    },
    (errors, e) => {
      console.log(errors, 'errors')
    }
  )
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
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

      <Box
        component={'form'}
        onSubmit={onSubmit}
        sx={{
          ...sx,
          backgroundColor: theme.palette.background.firstBackgroundColor,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          width: '100%',
          maxWidth: '600px',
          borderRadius: '5px',
          textAlign: 'center'
        }}
        ref={form}
        noValidate
        autoComplete={'off'}
        {...otherProps}
      >
        <Box>
          <Typography
            variant={'subtitle1'}
            fontWeight={theme.typography.fontWeightBold}
            fontFamily={theme.typography.fontFamily[0]}
            color={theme.palette.text.secondary}
          >
            get in touch
          </Typography>
          <Typography
            variant={'h1'}
            fontWeight={theme.typography.fontWeightBold}
          >
            CONTACT US
          </Typography>
        </Box>
        <TextField
          size={'small'}
          margin={'normal'}
          error={!!errors.customerName}
          id={'customerName'}
          label={'Name'}
          helperText={errors.customerName?.message}
          inputProps={{ style: { fontSize: '18px' } }}
          InputLabelProps={{ style: { fontSize: '18px' } }}
          sx={{
            fontSize: '10px',
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.background.secondBackgroundColor
            }
          }}
          {...registeredNameProps}
        />
        <TextField
          size={'small'}
          margin={'normal'}
          error={!!errors.mobileNumber}
          id={'mobileNumber'}
          label={'Mobile Number'}
          inputProps={{ style: { fontSize: '18px' } }}
          InputLabelProps={{ style: { fontSize: '18px' } }}
          helperText={errors.mobileNumber?.message}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.background.secondBackgroundColor
            }

          }}
          {...registeredPhoneNumberProps}
        />
        <TextField
          size={'small'}
          margin={'normal'}
          error={!!errors.emailAddres}
          id={'emailAddres'}
          label={'Email Addres'}
          inputProps={{ style: { fontSize: '18px' } }}
          InputLabelProps={{ style: { fontSize: '18px' } }}
          helperText={errors.emailAddres?.message}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.background.secondBackgroundColor
            }
          }}
          {...registeredEmailProps}
        />
        <TextField
          size={'small'}
          margin={'normal'}
          error={!!errors.postcode}
          id={'postcode'}
          label={'Your Postecode'}
          inputProps={{ style: { fontSize: '18px' } }}
          InputLabelProps={{ style: { fontSize: '18px' } }}
          helperText={errors.postcode?.message}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.background.secondBackgroundColor
            }
          }}
          {...registeredPostcodeProps}
        />
        <TextField
          size={'small'}
          margin={'normal'}
          error={!!errors.message}
          id={'message'}
          label={'Your Message'}
          multiline
          rows={4}
          inputProps={{ style: { fontSize: '18px' } }}
          InputLabelProps={{ style: { fontSize: '18px' } }}
          helperText={errors.message?.message}
          sx={{
            marginBottom: '20px',
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.background.secondBackgroundColor
            }
          }}
          {...registeredMessageProps}
        />
        <Button
          type={'submit'}
          variant={'contained'}
          sx={{
            margin: 'auto',
            color: 'white',
            padding: '8px 30px'
          }}
        >
          SEND
        </Button>
      </Box>
      {
        open
          ? (
            <Message
              open={open}
              handleClose={handleClose}
            />
            )
          : null
      }

    </Box>
  )
}

export default Contact
