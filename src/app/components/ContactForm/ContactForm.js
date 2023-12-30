import { Box, Typography, TextField, Button } from '@mui/material'
import theme from '@/app/theme/theme'

export const ContactForm = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      component={'form'}
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
      <TextField
        size={'small'}
        margin={'normal'}
        error={false}
        id={'name'}
        label={'Name'}
        defaultValue={''}
        helperText={''}
        sx={{
          backgroundColor: theme.palette.background.secondBackgroundColor,
          borderRadius: '5px'
        }}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={false}
        id={'mobileNumber'}
        label={'Mobile Number'}
        defaultValue={''}
        helperText={''}
        sx={{
          backgroundColor: theme.palette.background.secondBackgroundColor,
          borderRadius: '5px'
        }}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={false}
        id={'emailAddres'}
        label={'Email Addres'}
        defaultValue={''}
        helperText={''}
        sx={{
          backgroundColor: theme.palette.background.secondBackgroundColor,
          borderRadius: '5px'
        }}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={false}
        id={'postcode'}
        label={'Your Postecode'}
        defaultValue={''}
        helperText={''}
        sx={{
          backgroundColor: theme.palette.background.secondBackgroundColor,
          borderRadius: '5px'
        }}
      />
      <TextField
        size={'small'}
        margin={'normal'}
        error={false}
        multiline
        rows={4}
        id={'textarea'}
        label={'Type your message'}
        defaultValue={''}
        helperText={''}
        sx={{
          backgroundColor: theme.palette.background.secondBackgroundColor,
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      />
      <Button
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
