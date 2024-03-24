import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        p:2,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        bgcolor:"##2B3445",

    }}>
<Typography sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"20px"
}}>
    Designed and Developed by <Button sx={{mx:1}}>Abel Makos</Button>
    &copy; 2024
</Typography>
    </Box>
  )
}

export default Footer