import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBoltOutlined, WorkspacePremium } from '@mui/icons-material'
import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'


const MyBox = ({icon,title,sub}) => {
    const theme = useTheme()
    console.log(sub)
    return (
        <Box minWidth="250px" display={'flex'} alignItems={'center'} sx={{gap:2,
    flex:1,justifyContent:"center",py:1.5,
        [theme.breakpoints.down('sm')]:{
            px:2,
            justifyContent:"flex-start"
        }
        }}>
            {icon}
            <Box sx={{
                display:'flex',
                flexDirection:"column"
            }}>
                <Typography variant='body1' sx={{
                    color:theme.palette.myColor.second
                }}>{title}</Typography>
                <Typography variant='body1' sx={{fontWeight:400,color:theme.palette.myColor.main}}>{sub}</Typography>
            </Box>
        </Box>
    )
}
const IconSection = () => {
    const theme = useTheme()
  return (
    <Container sx={{my:3,bgcolor: theme.palette.mode === 'dark' ? '#000':'#FFF'}}>
        <Stack direction={'row'} divider={ useMediaQuery('(min-width:600px)')?<Divider orientation='vertical' />:null} sx={{
    
            flexWrap:"wrap"
        
    }} alignItems={'center'} justifyContent={useMediaQuery('(min-width:600px)') ? 'center':'left'} >
            <MyBox icon={<ElectricBoltOutlined />} title='Fast Delivery' sub="Start from $ 10.00"></MyBox>
            <MyBox icon={<CreditScoreOutlined />} title='Mony Guaranteey' sub="7 Days Mony Back"></MyBox>
            <MyBox icon={<WorkspacePremium />} title='365 days' sub="Return for free"></MyBox>
            <MyBox icon={<AccessAlarmOutlined />} title='Payment' sub="Secure System"></MyBox>

        </Stack>
    </Container>
  )
}

export default IconSection