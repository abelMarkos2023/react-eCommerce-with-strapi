import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating, Stack } from '@mui/material';
import { AddShoppingCartOutlined, ShoppingCartOutlined } from '@mui/icons-material';


import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ProductDetails from './ProductDetails';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const ProductCard = ({attr}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{display:"flex",flexDirection:"column",justifyContent:"space-between", maxWidth: {xs:"100%",sm:"265px",md:"270px",lg:"330px"},cursor:"pointer",mt:4,":hover":{
        '.img':{
            transform:"scale(1.08) rotate(2deg)",
            // transform:""
        }
    } }} >
      <CardMedia
        sx={{ height: 230,transition:"all 300ms ease-in-out" }}
        image={attr?.image.data[0].attributes.url}
        title="green iguana"
        className='img'
      />
      <CardContent>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Typography gutterBottom variant="h5" component="div">
         {attr?.title}
        </Typography>
        <Typography variant="body2" fontWeight={600} color="text.secondary">
         ${attr?.price}
        </Typography>
        </Box>
        <Typography variant='body1' color='text.secondary'>
           {attr?.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Button size="large" sx={{display:"flex",alignItems:"center",gap:1}} onClick={handleClickOpen}>
            <AddShoppingCartOutlined  fontSize='small'/>
            <Typography variant='body2' fontSize={'12'}>Add to cart</Typography>
        </Button>
        <Button size="small">
            <Rating value={attr?.rating} precision={0.1} size='small' readOnly/>
        </Button>
      </CardActions>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          p:0,
          m:0,
          '.MuiPaper-root':{
            minWidth:{xs:"100%",md:800},
            bgcolor:"#FFF",
            p:0,
            m:0,
            //bgcolor:"teal"
          },
          '.MuiDialogContent-root':{
            p:0,
          }
        }}
      >
       
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{p:0,'.MuiDialogContent-root':{
          padding:"0px !important"
        }}}>
        <ProductDetails fields={attr}/>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>

    </Card>
  )
}

export default ProductCard