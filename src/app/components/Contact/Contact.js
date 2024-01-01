import React, { useRef } from 'react'
import { Box, Grid, Typography, Container, TextField, Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

import theme from '@/app/theme/theme'

import isEmail from 'validator/lib/isEmail'
import emailjs from '@emailjs/browser'

import Message from '../Message'

import { useForm, Controller } from 'react-hook-form'

import contactBgI from './contactBgI.jpg'

export const Contact = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
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
    control,
    formState: { errors, isSubmitSuccessful }
  } = methods

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log(data)
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
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundAttachment: 'fixed',
        padding: '40px 0px'
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
            backgroundColor: theme.palette.background.firstBackgroundColor
          }}
        >
          <Grid
            gap={'50px'}
            item
            md={6}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            <Box >
              <PhoneIcon
                sx={{
                  color: theme.palette.primary.main
                }}
                fontSize={'large'}
              />
              <Typography
                variant={'h6'}
                fontWeight={theme.typography.fontWeightBold}
              >
                PHONE
              </Typography>
              <Typography
                variant={'body2'}
              >
                999-999-999
              </Typography>
            </Box>
            <Box >
              <FmdGoodIcon
                sx={{
                  color: theme.palette.primary.main
                }}
                fontSize={'large'}
              />
              <Typography
                variant={'h6'}
                fontWeight={theme.typography.fontWeightBold}
              >
                STREET
              </Typography>
              <Typography
                variant={'body2'}
              >
                99-999 Warsaw
              </Typography>
            </Box>
            <Box >
              <QueryBuilderIcon
                sx={{
                  color: theme.palette.primary.main
                }}
                fontSize={'large'}
              />
              <Typography
                variant={'h6'}
                fontWeight={theme.typography.fontWeightBold}
              >
                WORKING HOURS
              </Typography>
              <Typography
                variant={'body2'}
              >
                Monday - Friday 08:00 am to 12:00 pm
              </Typography>
              <Typography
                variant={'body2'}
              >
                Saturday 10:00 am to 03:00 pm
              </Typography>
              <Typography
                variant={'body2'}
              >
                Sunday 12:00 pm to 05:00 pm
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Box
              component={'form'}
              onSubmit={onSubmit}
              sx={{
                ...sx,
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
              <Controller
                control={control}
                name={'customerName'}
                defaultValue={''}
                rules={{
                  required: {
                    value: true,
                    message: 'Name is required'

                  }
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name={'customerName'}
                    margin={'normal'}
                    size={'small'}
                    onChange={onChange}
                    value={value}
                    error={!!errors.customerName}
                    id={'customerName'}
                    label={'Name'}
                    inputProps={{ style: { fontSize: '18px' } }}
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                    helperText={errors.customerName?.message}
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name={'mobileNumber'}
                defaultValue={''}
                rules={{
                  required: {
                    value: true,
                    message: 'Mobile Phone is required'

                  }
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name={'mobileNumber'}
                    margin={'normal'}
                    size={'small'}
                    onChange={onChange}
                    value={value}
                    error={!!errors.mobileNumber}
                    id={'mobileNumber'}
                    label={'Mobile Number'}
                    inputProps={{ style: { fontSize: '18px' } }}
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                    helperText={errors.mobileNumber?.message}
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name={'emailAddres'}
                defaultValue={''}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  validate: (email) => isEmail(email) || 'Wrong Email'
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name={'emailAddres'}
                    margin={'normal'}
                    size={'small'}
                    onChange={onChange}
                    value={value}
                    error={!!errors.emailAddres}
                    id={'emailAddres'}
                    label={'Email Addres'}
                    inputProps={{ style: { fontSize: '18px' } }}
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                    helperText={errors.emailAddres?.message}
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name={'postcode'}
                defaultValue={''}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required'
                  }
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name={'postcode'}
                    margin={'normal'}
                    size={'small'}
                    onChange={onChange}
                    value={value}
                    error={!!errors.postcode}
                    id={'postcode'}
                    label={'Your Postecode'}
                    inputProps={{ style: { fontSize: '18px' } }}
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                    helperText={errors.postcode?.message}
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name={'message'}
                defaultValue={''}
                rules={{
                  required: {
                    value: true,
                    message: 'Message is required'
                  }
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name={'message'}
                    margin={'normal'}
                    size={'small'}
                    onChange={onChange}
                    value={value}
                    error={!!errors.message}
                    id={'message'}
                    label={'Your Message'}
                    multiline
                    rows={4}
                    inputProps={{ style: { fontSize: '18px' } }}
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                    helperText={errors.message?.message}
                    fullWidth
                    sx={{
                      marginBottom: '15px',
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.secondBackgroundColor
                      }
                    }}
                  />
                )}
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
          </Grid>
        </Grid>
      </Container>
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
