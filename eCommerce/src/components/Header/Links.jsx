import { ExpandMore, KeyboardArrowRightOutlined, Person, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";


const Links = ({main,list}) => {

    return (
        <Box sx={{position:"relative",display:"flex",alignItems:"center",gap:2,cursor:"pointer",":hover .list":{
            display:"block",
            zIndex:2
        }}}>
        <Typography>{main}</Typography>
        <ExpandMore />

        <Stack className="list" sx={{position:"absolute",top:"100%",right:2,display:"none",p:0,m:0,minWidth:"170px",left:"50%",transform:"translateX(-50%)"}}>
        <Paper sx={{mt:2,}}>
        <List >
            {
                list.map(item => (
                    <>
                     <ListItem disablePadding sx={{position:"relative",":hover .subList":{display:"block"}}}>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary={item.text} sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                   {
                    item.isParent && (
                        <>
                         <Box flexGrow={1}></Box>
                    <KeyboardArrowRightOutlined />
                        </>
                    )
                   }
                </ListItemButton>

                    {item.isParent && (
                        <>

                        <Box className="subList" sx={{position:"absolute",left:"100%",top:"0",display:"none"}}>
                <Paper sx={{p:0,marginLeft:1,minWidth:90}}>
                <List sx={{px:2}}>
                        {
                            item.links.map(l => (
                                <ListItem disablePadding>
                                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                                    <ListItemText primary={l} sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                                </ListItemButton>
                            </ListItem>
                            ))
                        }
                </List>
            </Paper>

            </Box>
                        </>
                    )}
            </ListItem>

                    </>
                ))
                
            }
            {/* <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Dashboard" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{position:"relative",":hover .subList":{display:"block"}}}>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Products" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                    <Box flexGrow={1}></Box>
                    <KeyboardArrowRightOutlined />
                </ListItemButton>

<Box className="subList" sx={{position:"absolute",left:"100%",top:"0",display:"none"}}>
                <Paper sx={{p:0,marginLeft:1,minWidth:120}}>
                <List sx={{px:2}}>
                <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Customers" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Settings" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem>
                </List>
            </Paper>

            </Box>
            </ListItem>

           

            <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Orders" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Customers" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{p:0,px:1.5,display:"flex"}}>
                    <ListItemText primary="Profile" sx={{'.MuiTypography-root':{fontSize:"14px",fontWeight:300}}} />
                </ListItemButton>
            </ListItem> */}
           
        </List>
        </Paper>
        </Stack>
      </Box>
    )
}
export default Links;