import   { useContext } from "react";
import * as React from 'react';
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, Facebook, Instagram, LightModeOutlined, Twitter } from "@mui/icons-material";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
   
  'EN',
  'AR'
];



const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   
    <Box sx={{
        bgcolor:"#2B3445"
    }}>
         <Container>

        <Stack direction={'row'} alignItems={'center'}>
        <Typography variant="body2" sx={{
            mr:2,
            padding:"2px 10px",
            bgcolor:"#D23F56",
            borderRadius:"12px",
            color:"white",
            fontSize:"10px",
            fontWeight:"bold"

        }}>Hot</Typography>
        <Typography variant="body2" sx={{
            fontWeight:"300",
            color:"white",
            fontSize:"12px",
           
        }}>Free Express Shipping</Typography>
        <Box flexGrow={1}></Box>
        <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined fontSize="small" sx={{color:'#FFF'}}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined fontSize="small"/>
        </IconButton>
      )}
    </div>



    <List
        component="nav"
        aria-label="Device settings"
        sx={{ }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary=""
            sx={{'.MuiTypography-root':{
                fontSize:'10px',
                fontWeight:'300',
                color:'white'
            }}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"12px",padding:"3px 10px",minHeight:"10px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>




















    <Twitter sx={{
        fontSize:"16px",
        color:"white",
        mx:1
    }}/>
    <Facebook sx={{
        fontSize:"16px",
        color:"white",
        mx:1
    }} />
    <Instagram sx={{
        fontSize:"16px",
        color:"white",
        mx:1
    }} />
        </Stack>
        </Container>
    </Box>
   
  );
};

export default Header1;