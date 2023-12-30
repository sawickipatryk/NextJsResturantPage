import { Box } from '@mui/material'

export const ContactForm = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >

    </Box>
  )
}

export default ContactForm
