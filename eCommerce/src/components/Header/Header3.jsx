import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, MenuList, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BikeScooter, BookOutlined, Close, ElectricalServicesOutlined, ExpandMore, GamesOutlined, KeyboardArrowRightOutlined, SportsEsportsOutlined, Window } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Links from './Links';






const Header3 = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const anchor = 'top'
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      const accordionData = [
        {
          title:'home',
          childLinks:['link1','link2','link3']
        },
        {
          title:'about',
          childLinks:['link1','link2','link3']
        },
        {
          title:'contact',
          childLinks:['link1','link2','link3']
        },
        {
          title:'pages',
          childLinks:['link1','link2','link3']
        },
        {
          title:'user accounts',
          childLinks:['link1','link2','link3']
        },
      ];

      const list1 = [{
        text:"Dashboard",
        isParent:false,
       },
       {
        text:"Products",
        isParent:true,
        links:['Customers','Orders','Settings']
       },
       {
        text:"Orders",
        isParent:false,
       },
       {
        isParent:false,
        text:"Profile"
       }
       ]

       const list2 = [{
        text:"Mobiles",
        isParent:true,
        links:['Samsung','Apple','Huawei']
       },
       {
        text:"Laptop",
        isParent:true,
        links:['Dell','HP','Toshipa']
       },
       {
        text:"Screens",
        isParent:true,
        links:['SAMSANG','LG']
       },
       {
        text:"Cars",
        isParent:false
       }
       ]

       const list3 = [{
        text:"Toyota",
        isParent:true,
        links:['Crousers','Family','Sport','Truck']
       },
       {
        text:"BMW",
        isParent:true,
        links:['S550','FG44','DM330']
       },
       {
        text:"Marcedes",
        isParent:true,
        links:['SClass','AClass']
       },
       {
        text:"Jaguar",
        isParent:false
       }
       ]

       const list4 = [{
        text:"Furneture",
        isParent:true,
        links:['Beds','Sofas','Fridges','Washers']
       },
       {
        text:"Kitshen",
        isParent:true,
        links:['S550','FG44','DM330']
       },
       {
        text:"Marcedes",
        isParent:true,
        links:['SClass','AClass']
       },
       {
        text:"Jaguar",
        isParent:false
       }
       ]

       const list5 = [{
        text:"Privecy Policy",
        isParent:false,
       },
       {
        text:"Our Mission",
        isParent:false,
       },
       {
        text:"Testimonials",
        isParent:false,
       },
       {
        text:"News Latter",
        isParent:false
       }
       ]
    return (
        <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Box sx={{my:2}}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{display:'flex',gap:"2px",color:theme.palette.myColor.second,width:"220px",bgcolor:theme.palette.myColor.main}}
                >
                    <Window flexGrow={1} />
                    <Typography variant='body2'>Categories</Typography>
                    <Box flexGrow={1}></Box>
                    <KeyboardArrowRightOutlined />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    sx={{
                        ".MuiList-root":{
                            width:"220px"
                        }
                    }}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} >
                        <ListItemIcon>
                        <SportsEsportsOutlined />
                        </ListItemIcon>
                        <ListItemText>
                        Sports
                        </ListItemText>
                        
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BikeScooter />
                        </ListItemIcon>
                        <ListItemText>
                        Bikes
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BookOutlined />
                        </ListItemIcon>
                        <ListItemText>
                        Books
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <GamesOutlined />
                        </ListItemIcon>
                        <ListItemText>
                        Games
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <ElectricalServicesOutlined />
                        </ListItemIcon>
                        <ListItemText>
                        Electronics
                        </ListItemText>
                    </MenuItem>
                </Menu>
            </Box>
            {useMediaQuery('(min-width:901px)') && 
            <Stack direction={'row'} sx={{display:"flex",alignItems:"center",gap:2,cursor:"pointer"}}>
             <Links  main="Home" list={list1}/>
             <Links  main="Electronics" list={list2}/>
             <Links  main="Cars" list={list3}/>
             <Links  main="Home Fruneture" list={list4}/>
             <Links  main="About Us" list={list5}/>
            </Stack>
            }
            {useMediaQuery('(max-width:900px)') && <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
            </IconButton>
            
            }
            

            <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{".MuiBox-root":{height:"100vh",p:4}}}
          >

           <Box className='bordered' sx={{width:444,mx:"auto",mt:6,position:"relative"}}>
           <IconButton sx={{position:"absolute",right:2,top:0}} onClick={() => setState({...state,top:false})}>
                <Close sx={{transition:"all 400ms ease-in",":hover":{
                  rotate:"130deg"
                }}}/>
            </IconButton>
            <Box>
              { accordionData.map(acc => (
                <>
                 <Accordion sx={{bgcolor:"initial",}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{acc.title}</Typography>
        </AccordionSummary>
         <List sx={{py:0,my:0}}>
          {acc.childLinks.map(accLink => (
            <ListItemButton sx={{py:0,my:0,px:4}}>
            <ListItemText>
              {accLink}
            </ListItemText>
          </ListItemButton>
          ))}
         </List>
        
      </Accordion>
      <Divider />
                </>
              ))
     
              }
      
      
    </Box>
           </Box>
            {/* {list('top')} */}
          </Drawer>
            

        </Container>
    )
}

export default Header3