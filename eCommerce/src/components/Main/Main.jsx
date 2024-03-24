import { Box, Container, Paper, Stack, Typography, useTheme } from '@mui/material'
import React,{useState} from 'react'

import LoadinImg from '../../assets/loadin.gif'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ProductCard from './Card';
import { useGetproductByNameQuery } from '../../Redux/products';

const Main = () => {

 const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  const [url,setUrl] = useState('products?populate=*')
  const {data,error,isLoading} = useGetproductByNameQuery(url)

  console.log(data)

  return (
    <Container sx={{mt:4,p:2}}>
        <Stack direction='row' flexWrap={'wrap'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                 <Typography variant='h6'>
                    Selected Product
                </Typography>
                <Typography sx={{fontWeight:300}} variant='body1'>All our new arrivals in exclusive brand selection
                </Typography>
            </Box>
         <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color='error'
            sx={{
                '.Mui-selected':{
                    color:"#e94560",
                    backgroundColor:"initial",
                    border:"1px solid rgba(233,69,96,0.4) !important"
                }
            }}
    >
      <ToggleButton onClick={() => setUrl('products?populate=*')} sx={{color:theme.palette.text.primary}} className='toggle-btn' value="left" aria-label="left aligned">
        ALL PRODUCTS
      </ToggleButton>
      <ToggleButton onClick={() => setUrl('products?populate=*&filters[category][$eq]=man')} sx={{color:theme.palette.text.primary}} className='toggle-btn' value="center" aria-label="centered">
        MEN CATEGORY
      </ToggleButton>
      <ToggleButton onClick={() => setUrl('products?populate=*&filters[category][$eq]=woman')} sx={{color:theme.palette.text.primary}} className='toggle-btn' value="right" aria-label="right aligned">
        WOMEN CATEGORY
      </ToggleButton>
    </ToggleButtonGroup>
        </Stack>
        {isLoading && (
          <Paper sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img  src = {LoadinImg} />
          </Paper>
        )}
        {data?.data.length > 0 && (
          <Stack sx={{display:'grid',gap:1,gridTemplateColumns:{sx:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}}}>
            {
              data.data.map(item => (
                <ProductCard key={item.id} attr = {item.attributes} />

              ))
            }


      </Stack>
        )}
        
    </Container>
  )
}

export default Main