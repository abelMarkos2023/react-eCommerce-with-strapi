import styled from '@emotion/styled';
import { ExpandMore, Person, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Box, Container, IconButton, InputBase, Typography, alpha, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
   'all Categories',
   'Clothes',
  'Electronic',
    'Food',
  
];

const Search = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: "22px",
    flexGrow:1,
    border:"1px solid #777",
    overflow:"hidden",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '400px',
    },
  }));
  
  const SearchIconWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#777"
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      [theme.breakpoints.down('sm')]:{
        width:"60px"
      }
    },
  }));
  
const Header2 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);

    const theme = useTheme()
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
    <Container sx={{my:1,display:"flex",justifyContent:"space-between"}}>
        <Stack sx={{mx:2}} alignItems={'center'}>
            <ShoppingCartOutlined />
            <Typography variant='body2'>eCommerce</Typography>
        </Stack>


        <Search sx={{
            borderRadius:"22px",
            display:"flex",
            justifyContent:"space-between"
            }}>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          

         <div>
         <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor:theme.palette.myColor.main,color:theme.palette.myColor.second,p:"0"}}
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
                fontSize:'14px',
                fontWeight:'300',
                color:theme.palette.myColor.second,
                width:"90px",
                textAlign:"center"
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
          sx={{fontSize:"14px",padding:"3px 10px",minHeight:"10px",
        [theme.breakpoints.down('sm')]:{
          width:'50%'
        }
        }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
         </div>
      </Search>
          <Box sx={{display:"flex",alignItems:'center',gap:'10px'}}>
            <IconButton>
            <Person/>
            </IconButton>
            <IconButton>
            <Badge badgeContent={4} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Box>
    </Container>
  )
}

export default Header2