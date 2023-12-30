import { Box, Typography, TextField, Button } from '@mui/material'
import isEmail from 'validator/lib/isEmail'

import { useFormContext } from 'react-hook-form'

import theme from '@/app/theme/theme'

export const ContactForm = (props) => {
  const {
    sx,
    onSubmit,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    formState: { errors }
  } = methods

  const registeredNameProps = register('name', {
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
  const registeredTextareaProps = register('textarea', {
    required: {
      value: true,
      message: 'textarea is required'
    }
  })
  return (
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
      <Box>

      </Box>
      <TextField
        size={'small'}
        margin={'normal'}
        error={!!errors.name}
        id={'name'}
        label={'Name'}
        defaultValue={''}
        helperText={errors.name?.message}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.background.secondBackgroundColor
          },
          borderRadius: '5px'
        }}
        {...registeredNameProps}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={!!errors.mobileNumber}
        id={'mobileNumber'}
        label={'Mobile Number'}
        defaultValue={''}
        helperText={errors.mobileNumber?.message}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.background.secondBackgroundColor
          },
          borderRadius: '5px'
        }}
        {...registeredPhoneNumberProps}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={!!errors.emailAddres}
        id={'emailAddres'}
        label={'Email Addres'}
        defaultValue={''}
        helperText={errors.emailAddres?.message}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.background.secondBackgroundColor
          },
          borderRadius: '5px'
        }}
        {...registeredEmailProps}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={!!errors.postcode}
        id={'postcode'}
        label={'Your Postecode'}
        defaultValue={''}
        helperText={errors.postcode?.message}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.background.secondBackgroundColor
          },
          borderRadius: '5px'
        }}
        {...registeredPostcodeProps}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={!!errors.textarea}
        multiline
        rows={4}
        id={'textarea'}
        label={'Type your message'}
        defaultValue={''}
        helperText={errors.textarea?.message}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.background.secondBackgroundColor
          },
          borderRadius: '5px',
          marginBottom: '20px'
        }}
        {...registeredTextareaProps}
      />
      <Button
        type={'submit'}
        variant={'contained'}
        sx={{
          margin: 'auto',
          color: 'white'
        }}
      >
        SEND
      </Button>
    </Box>
  )
}

export default ContactForm
