import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MyContext } from "../MyContext";

import CloseIcon from '@mui/icons-material/Close';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Sign In', 'Sign Up'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {setPage, message, setMessage} = useContext(MyContext)


  function handleClick() {
    setMessage('')
    fetch('/cookie', {
      headers: {'Accept': 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log(data.cookie_value))
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Extinct Earth
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => setPage(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <div>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{color: '#fff',backgroundColor: 'black', boxShadow: 'none', padding: '1rem'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', fontWeight: "bold" } }}
          >
            <MenuIcon />
             &nbsp;Extinct Earth 
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: 'Montserrat', fontSize: '2.4rem'} }}
          >
          <div style={{display:'flex', alignItems: 'center'}}>
           Extinct Earth
          </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item} 
                sx={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Montserrat' }}
                onClick={() => setPage(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{p: message === 'Not authorized' ? 1.7 : 3 }}>
        <Toolbar />
      </Box>
    </Box>
    {message ===  "Not authorized" ? (
       <div>
       <Typography 
         style={{
           display: 'flex',
           color: 'white', 
           backgroundColor: '#1b5e20',
           padding: '0.5rem'
         }}
       >
         <div style={{ flex: 1, fontSize: '1.5rem', textAlign: 'center' }}>
            Welcome, don't forget to sign up to access all the features and pages on the website! 
         </div>
           <CloseIcon fontSize='medium' sx={{marginLeft: '1.5rem'}} onClick={handleClick} />
       </Typography>
     </div>
      
      ) : (

        ""

    )}
   
  </div>
  );
}


