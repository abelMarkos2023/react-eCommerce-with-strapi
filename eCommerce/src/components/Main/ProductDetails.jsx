import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React,{useState} from 'react'
//import Img from '../../assets/baner-17.jpg'

const ProductDetails = ({fields}) => {
    const theme = useTheme();
    const images = fields.image.data;
    const [img,setImg] = useState(images[0].attributes.url)
  return (
    <Box sx={{display:"flex",py:2, flexDirection:{xs:'column',sm:"row"},alignItems:"center",gap:2}}>
        <Box sx={{display:"flex",height:"100%"}} flex={1}>
            <img style={{display:"flex",height:"100%"}} src={img} alt="" width='300px' />
        </Box>
        <Box sx={{textAlign:{sx:"center",sm:"left"},p:1}}>
            <Typography variant='h5' color='magenta'>{fields.category}</Typography>
            <Typography fontSize={22} my={0.4} color='crimson' fontWeight={600}>$12.99</Typography>
            <Typography variant='body1' color="teal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aperiam eius, incidunt repellat sed aspernatur. Id animi eos quasi exercitationem?
            </Typography>
            <Stack direction='row' gap={1} mt={2} flexWrap={'wrap'} justifyContent="center">
                {
                    images.map(item => (
                        <img width='90px' onClick={() => setImg(item.attributes.url)} style={{cursor:"pointer"}} src={item.attributes.url} />
                    ))
                }
            </Stack>
            <Button variant='contained' sx={{my:1}}>
            <AddShoppingCartOutlined fontSize='small' sx={{mr:1}}/>
            Buy Now
            </Button>
        </Box>
    </Box>
  )
}

export default ProductDetails